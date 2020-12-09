import { Router } from 'express';

import { signUp, login, getAllUsers } from './user.controller';

const routes = Router();

routes.post('/signup', signUp);
routes.post('/login', login);
routes.get('/', getAllUsers);

export default routes;