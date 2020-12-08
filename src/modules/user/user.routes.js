import { Router } from 'express';

import { createUser } from './user.controller';

const routes = Router();

routes.post('/', create);

export default routes;