import { Router } from "express";
import * as Yup from 'yup';

import { UserServices } from './user.service';
import { signUp, login, getAllUsers } from "./user.controller";

const routes = Router();

routes.get("/", getAllUsers);
routes.post("/signup", signUp);
routes.post("/login", login);

export default routes;
