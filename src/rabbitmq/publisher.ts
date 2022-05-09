import * as amqp from 'amqplib';

const conectar = async (message: string) => {
    const queueName = "MongoDb"
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        channel.assertQueue(queueName);
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`mensagem enviada! ${message}`);

        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 5000);
    } catch (e) {
        console.log(e)
    }

};

export {conectar};