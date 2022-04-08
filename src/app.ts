import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { router } from './routes/router';
import { errorMiddleware } from './middlewares/errorMiddleware';
import SwaggerUI from 'swagger-ui-express';
import swaggerDocs from "./swagger.json";
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(swaggerDocs));

app.listen(4000, () => console.log("The server is runing"));

