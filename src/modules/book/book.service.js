import Book from './book.model.js';

const createBook = async (data) => {
    const book = await Book.create(data);
    console.log(book);
    return book;
};

const getBook = async (id) => {
    const book = await Book.findOne({_id: id});

    return book;
}

const removeBook = async (id) => {
    const data = await Book.deleteOne({_id: id});
    return data.deletedCount;
}

const fetchAll = async () => {
   const books = await Book.find();
   console.log(books);
   return books;
}

const fetchAllBookId = async () => {
    const books = await Book.find().select('_id');
    console.log(books);
    return books;
}

const updateBook = async (_id, data) => {
    const book = await Book.findOneAndUpdate( {_id}, data, {new: true});
    console.log(book);
    return book;
};

export const BookServices = {
    createBook,
    removeBook,
    fetchAll,
    getBook,
    updateBook
};