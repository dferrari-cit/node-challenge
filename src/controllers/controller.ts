import { Request, Response } from 'express';
import { Service } from '../service/service';

class Controller {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new Service();
        const { name } = req.params;

        const user = await service.execute(name);
        
        return res.status(200).json(user);
    }
}

export { Controller };




























#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});












import { Channel, Connection } from 'amqplib'
import * as amqp from 'amqplib';

const message = "oi";
const conectar = async () => {

    amqp.connect('amqp://localhost', function(error0: Error, connection: Connection){


    }
    try {
        const connection: Connection = await amqp.connect("amqp://localhost", () => {




        });
        const channel: Channel = await connection.createChannel();

        const queue = await channel.assertQueue("MongoDb"); // create queue named "jobs"
        channel.sendToQueue("MongoDb", Buffer.from(message));
        console.log(`Job sent successfully! ${message}`);

    } catch (e) {
        console.log(e)



    
//         if (error0) {
//             throw error0;
//         }


//         const channel: Channel = connection.createChannel(function(){

//             var queue = 'hello';
//             var msg = 'Hello World!';

//             channel.assertQueue(queue, {
//                 durable: false
//             });
//             channel.sendToQueue(queue, Buffer.from(msg));

//             console.log(" [x] Sent %s", msg);
//         };)
        

//         setTimeout(function () {
//             connection.close();
//             process.exit(0);
//         }, 500);
//     });
// }

// connect();