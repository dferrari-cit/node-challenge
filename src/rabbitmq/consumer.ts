import * as amqp from 'amqplib';
import { ConsumeMessage } from 'amqplib';

async function conectar() {

    const queueName = "MongoDb";

    const connection = await amqp.connect('amqp://localhost');

    const channel = await connection.createChannel()

    channel.assertQueue(queueName);


    channel.assertQueue(queueName, {
        durable: true
    })

    console.log(`[*] Waiting for messages in ${queueName}. To exit press CTRL+C`)

    channel.consume(queueName, (msg: ConsumeMessage) => {
        console.log(` [x] Received ${msg.content.toString()}`);
    }, {
        noAck: true
    })
}
conectar()