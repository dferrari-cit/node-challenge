import { Consumer } from "./consumer";

const consumer = new Consumer('test_queue', 'test.direct', 'rota_q1');

async function listen() {
    consumer.consume();
    console.log('Consumer rodando');
}

listen();