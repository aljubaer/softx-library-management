import {Router} from 'express';
import {BookServices} from "./book.service.js";
import { AuthServices } from '../../services/auth';


const routes = Router();

routes.post('/', async (req, res) => {
    try {
        const book = await BookServices.createBook(req.body);
        res.status(200).json(book);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});

routes.get('/', [AuthServices.getTokenFromHeaders, AuthServices.isAdmin], async (req, res) => {
    try {
        const books = await BookServices.fetchAll();
        res.status(200).json(books);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

routes.get('/:bookId', async (req, res) => {
    try {
        const id = req.params.bookId;
        const book = await BookServices.getBook(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({message: "Book not found"});
        }
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

routes.delete('/:bookId', async (req, res, next) => {
    try {
        const id = req.params.bookId;
        const count = await BookServices.removeBook(id);
        if (count) {
            res.status(200).json({message: "Book has been deleted"});
        } else {
            res.status(404).json({message: "Book not found"});
        }
    } catch (e) {
        res.status(500).json({message: e.message});
    }

});

routes.put('/:bookId', async (req, res) => {
    try {
        const id = req.params.bookId;
        let updateOptions = req.body;
        const book = await BookServices.updateBook(id, updateOptions);
        res.status(200).json(book);
    } catch (e) {
        res.status(404).json({message: "Book not found"});
    }
});

routes.put('/:bookId/active', async (req, res) => {
    try {
        const id = req.params.bookId;
        let updateOptions = {isActive: true};
        const book = await BookServices.updateBook(id, updateOptions);
        res.status(200).json(book);
    } catch (e) {
        res.status(404).json({message: "Book not found"});
    }
});

routes.put('/:bookId/deactive', async (req, res) => {
    try {
        const id = req.params.bookId;
        let updateOptions = {isActive: false};
        const book = await BookServices.updateBook(id, updateOptions);
        res.status(200).json(book);
    } catch (e) {
        res.status(404).json({message: "Book not found"});
    }
});

export default routes;