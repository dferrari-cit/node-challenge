import { Router } from 'express';

import { Controller } from '../controllers/controller';

const router = Router();

router.get('/searchProfile/:name', new Controller().handle);

export { router };