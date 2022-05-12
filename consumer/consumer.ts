import RabbitmqService from "./rabbitmqServer";
import saveRegistry, { Registry } from "./remote-database";
require('dotenv').config()

export class Consumer {
    server: RabbitmqService;
    queue: string;
    exchange: string;
    routerKey: string;

    constructor(queue, exchange, routerkey) {
        this.server = new RabbitmqService(process.env.RABBITMQ_STRING_CONNECTION)
        this.queue = queue
        this.exchange = exchange;
        this.routerKey = routerkey;
    }

    async consume(): Promise<void> {
        await this.server.start();
        await this.server.consumeInQueue(this.queue,this.exchange, this.routerKey, async (message) => {
            // messages.push(JSON.parse(message.content.toString()));
            const {searchedName, searchedDate} = JSON.parse(message.content.toString());
            console.log(searchedName, searchedDate);
            saveRegistry(searchedName, searchedDate);
        });
    }
}