import express from 'express';

import middlewareConfig from './config/middleware';
import './config/db';
import {BookRoutes, UserRoutes} from "./modules";

const app = express();

middlewareConfig(app);

app.use('/user', UserRoutes);
app.use('/book', BookRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server listening on port 3000`)
});