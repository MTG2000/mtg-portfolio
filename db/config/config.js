require("dotenv").config();

const { DB, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const config = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: DB_HOST,
    dialect: "mysql"
  },

  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: DB_HOST,
    dialect: "mysql"
  }
};

module.exports = config;
