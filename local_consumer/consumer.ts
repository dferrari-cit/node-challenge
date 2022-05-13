import RabbitmqService from "./rabbitmqServer";
import saveUserRegistry from "./local-database";
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

    async consumeLocalDB(): Promise<void> {
        await this.server.start();
        await this.server.consumeInQueue(this.queue, this.exchange, this.routerKey, async (message) => {
            const response = JSON.parse(message.content.toString());
            const user = response[0]
            const starredList = response[1]
            if (message.content.toString() != '') {
                saveUserRegistry(user, starredList);
            }
        });
    }
}