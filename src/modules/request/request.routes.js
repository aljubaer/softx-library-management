import { Router } from "express";
import {RequestServices} from "./request.service";
import {AuthServices} from "../../services/auth";

const routes = Router();

routes.get('/', [AuthServices.getTokenFromHeaders, AuthServices.isAdmin],
    async (req, res) => {
    try {
        const requests = RequestServices.fetchAllRequests();
        res.status(200).json(requests);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

routes.post('/:id', AuthServices.getTokenFromHeaders,
    async (req, res) => {
    const userId = req.payload.id;
    const bookId = req.params.id;
    try {
        const request = await RequestServices.requestOneBook(userId, bookId);
        res.status(200).json(request);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

routes.post('/', AuthServices.getTokenFromHeaders , AuthServices.getTokenFromHeaders, async (req, res) => {
    try {
        const uid = req.payload.id;
        const request = await RequestServices.requestAllBooks(uid);
        console.log(request);
        res.status(200).json(request);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

export default routes;