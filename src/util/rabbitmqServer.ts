import { Connection, Channel, connect, Message } from "amqplib";

export default class RabbitmqService {
  private conn: Connection;
  private channel: Channel;

  constructor(private uri: string) { }

  async start() {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async closeConnection() {
    setTimeout(async () => {
      await this.conn.close();
    }, 100);
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    queue: string,
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    await this.channel.assertExchange(exchange, 'direct', {
      durable: false
    });
    await this.channel.assertQueue(queue, {
      durable: false
    });
    await this.channel.bindQueue(queue, exchange, routingKey);
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

  async consumeInQueue(
    queue: string,
    callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  }
}
