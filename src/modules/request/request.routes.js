import { Router } from "express";
import {RequestServices} from "./request.service";

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const requests = RequestServices.fetchAllRequests();
        res.status(200).json(requests);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

routes.post('/:id', async (req, res) => {
    // try {
    //     const request = RequestServices.requestOneBook(req.body);
    //     console.log(request);
    //     res.status(200).json(request);
    // } catch (e) {
    //     res.status(500).json({message: e.message});
    // }
});

routes.post('/', async (req, res) => {
    try {
        const request = RequestServices.requestAllBooks(req.body);
        console.log(request);
        res.status(200).json(request);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});