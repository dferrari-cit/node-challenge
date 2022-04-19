import 'express-async-errors';
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import { router } from './routes/router';
import { errorMiddleware } from './middlewares/errorMiddleware';
import SwaggerUI from 'swagger-ui-express';
import swaggerDocs from "./swagger.json";
import { statusMonitor } from './util/monitor';

const app = express();
app.set('json spaces',2);
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocs));

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://root:example@localhost:27017/bancoMongo?authSource=admin')
        .then(() => console.log("mongoose is connected"))
        .catch(err => console.log(err))
}

app.use(statusMonitor);
app.get('/status', statusMonitor.pageRoute)


 




app.listen(4000, () => console.log("The server is runing"));

