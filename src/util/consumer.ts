import { Registry } from "../model/registry.model";
import RabbitmqService from "./rabbitmqServer";
require('dotenv').config()

export class Consumer {
    server: RabbitmqService;
    queue: string;

    constructor(queue) {
        this.server = new RabbitmqService(process.env.RABBITMQ_STRING_CONNECTION)
        this.queue = queue
    }

    async consume(): Promise<Array<Registry>> {
        let messages: Registry[] = [];
        await this.server.start();
        await this.server.consumeInQueue(this.queue, async (message) => {
            messages.push(JSON.parse(message.content.toString()));
            console.log(message.content.toString());
        });
        await this.server.closeConnection()
        return messages;
    }
}