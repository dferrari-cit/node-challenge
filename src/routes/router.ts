import { Router } from 'express';

import { Controller } from '../controllers/controller';
import { GetUsersController } from '../controllers/getUsersController';

const router = Router();

router.get('/searchProfile/:name', new Controller().handle);

router.get("/getAllStoredUsers", new GetUsersController().handle)

export { router };