import morgan from 'morgan';
import express from 'express';
import cors from 'cors';

const isDev = process.env.NODE_ENV === 'development';

export default (app) => {
    app.use(morgan(isDev ? 'dev' : 'common'));
    app.use(express.json());
    app.use(cors());
}