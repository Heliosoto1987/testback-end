const { Schema, model } = require("mongoose");

const BooksAndAuthorSchema = Schema({
  author: {
    first_name: {
      type: String,
      require: false,
      unique: true,
    },
    last_name: {
      type: String,
      require: false,
    },
  },
  Book: {
    name: {
      type: String,
      require: true,
    },
    isbn: {
      type: String,
      require: false,
      unique: true,
    },
  },
});

module.exports = model("BooksAndAuthor", BooksAndAuthorSchema);
