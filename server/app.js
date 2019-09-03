const express = require('express');
const exphbs = require('express-handlebars');
const { join } = require('path');

const app = express();

const { router } = require('./controllers');

app.set('port', process.env.PORT || 5000);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
  }),
);

app.use(router);

module.exports = {
  app,
};