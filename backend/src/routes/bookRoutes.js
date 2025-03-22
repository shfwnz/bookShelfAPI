const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} = require('../handlers/booksHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
  },
];
