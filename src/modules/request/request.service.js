import Request from './request.model';

const fetchAllRequests = async () => {
    const requests = Request.find();
    console.log(requests);
    return requests;
}

const requestOneBook = async (data) => {
    const request = await Request.create(data);
    console.log(request);
    return request;
}

const requestAllBooks = async () => {
    // Todo: get all book id and create a request
}

export const RequestServices = {
    fetchAllRequests,
    requestOneBook,
    requestAllBooks
}