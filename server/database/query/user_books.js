const { connection } = require('../config/connection');

const usersBooks = name => {
  return connection.query(
    `SELECT books.name FROM users_books INNER JOIN books ON books.id = users_books.book_id INNER JOIN users ON users.id = users_books.user_id WHERE users.name = '${name}'`
  );
};

module.exports = {
  usersBooks
};
