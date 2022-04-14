import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { router } from './routes/router';
import { errorMiddleware } from './middlewares/errorMiddleware';
import SwaggerUI from 'swagger-ui-express';
import swaggerDocs from "./swagger.json";
import { statusMonitor } from './util/monitor';

const app = express();


app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(swaggerDocs));

app.use(statusMonitor);
app.get('/status', statusMonitor.pageRoute)


 




app.listen(4000, () => console.log("The server is runing"));

