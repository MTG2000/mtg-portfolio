let mongoose = require("mongoose");
require("dotenv").config();

const { DB, DB_PASSWORD, DB_USER } = process.env;
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mtgdevcluster-bqhsz.mongodb.net/${DB}?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
