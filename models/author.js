const { Schema, model } = require("mongoose");

const AuthorSchema = Schema({
  first_name: {
    type: String,
    require: false,
    unique: true,
  },
  last_name: {
    type: String,
    require: false,
  },
});

module.exports = model("author", AuthorSchema);
