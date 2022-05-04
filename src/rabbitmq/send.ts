
import * as amqp from 'amqplib';



const message = "oi";
const conectar = async () => {
    const queueName = "MongoDb"
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        await channel.assertQueue(queueName); // create queue named "jobs"
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`Job sent successfully! ${message}`);

        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 5000);
    } catch (e) {
        console.log(e)
    }

};

conectar();