import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

import { isDev } from '../constants/index';

export default (app) => {
    app.use(morgan(isDev ? 'dev' : 'common'));
    app.use(express.json());
    app.use(cors());
}