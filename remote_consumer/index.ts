import { Consumer } from "./consumer";
require('dotenv').config()

const consumerRemoteDB = new Consumer(process.env.DATABASE_REMOTE_QUEUE, process.env.EXCHANGE, process.env.DATABASE_REMOTE_BINDING_KEY);

async function listen() {
    consumerRemoteDB.consumeRemoteDB();
    console.log('Consumer remoto rodando');
}

listen();