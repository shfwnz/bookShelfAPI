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
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookid}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookid}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookid}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
