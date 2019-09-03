const { usersBooks } = require('../database/query/user_books');

exports.getHome = (req, res) => {
  usersBooks('Yosef').then(result =>
    res.render('home', { books: result.rows })
  );
};
