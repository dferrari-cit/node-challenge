import RabbitmqService from "./rabbitmqServer";
require('dotenv').config()

export class Publisher {
    server: RabbitmqService;
    mensage: string;
    exchange: string;
    bindingKey: string;
    queue: string;

    constructor(mesage, exchange, bindingKey, queue) {
        this.server = new RabbitmqService(process.env.RABBITMQ_STRING_CONNECTION)
        this.mensage = mesage
        this.exchange = exchange
        this.bindingKey = bindingKey
        this.queue = queue
    }

    async publisheInExchange() {
        await this.server.start()
        await this.server.publishInExchange(this.queue, this.exchange, this.bindingKey, this.mensage)
        await this.server.closeConnection()
    }
}