const { Pool } = require('pg');
require('env2')('./config.env');

if (!process.env.DB_URL) console.log('No DB Url Provided');

const options = {
  connectionString: process.env.DB_URL,
  ssl: true
};

const connection = new Pool(options);

module.exports = {
  connection
};
