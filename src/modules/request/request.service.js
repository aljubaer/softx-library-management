import Request from './request.model';
import {BookServices} from "../book/book.service";

const fetchAllRequests = async () => {
    const requests = Request.find();
    console.log(requests);
    return requests;
}

const requestOneBook = async (bookId, userId) => {
    let bookIds = [];
    bookIds.push(bookId);
    const request = await Request.create({bookIds, userId});
    console.log(request);
    return request;
}

const requestAllBooks = async (userId) => {
    const allBookIds = await BookServices.fetchAllBookId();
    console.log(allBookIds);
    const request = await Request.create({
        bookIds: allBookIds,
        userId
    });
    return request;
}

export const RequestServices = {
    fetchAllRequests,
    requestOneBook,
    requestAllBooks
}