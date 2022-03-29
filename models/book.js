const { Schema, model } = require("mongoose");

const BookSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  isbn: {
    type: String,
    require: false,
    unique: true,
  },
});

module.exports = model("book", BookSchema);
