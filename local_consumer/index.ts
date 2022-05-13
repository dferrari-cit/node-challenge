import { Consumer } from "./consumer";
require('dotenv').config()

const consumerLocalDB = new Consumer(process.env.DATABASE_LOCAL_QUEUE, process.env.EXCHANGE,process.env.DATABASE_LOCAL_BINDING_KEY)

async function listen() {
    consumerLocalDB.consumeLocalDB();
    console.log('Consumer Local rodando');
}

listen();