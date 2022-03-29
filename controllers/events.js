const { response } = require("express");
const BooksAndAuthorSchema = require("../models/BooksAndAuthorSchema");

const getBooks = async (req, res = response) => {
  const books = await BooksAndAuthorSchema.find();
  res.json({
    ok: true,
    msg: "i am get books",
    books,
  });
};

const getBookById = async (req, res = response) => {
  const eventoId = req.params.id;
  const books = await BooksAndAuthorSchema.findById(eventoId);
  res.json({
    ok: true,
    msg: "i am get books by id",
    books,
  });
};

const getAuthors = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "i am get Authors",
  });
};

const getAuthorById = async (req, res = response) => {
  const eventoId = req.params.id;
  const author = await Author.findById(eventoId);
  res.json({
    ok: true,
    msg: "i am get author by id",
    author,
  });
};

const postAuthor = async (req, res = response) => {
  const { first_name, last_name } = req.body;
  try {
    let author = new BooksAndAuthorSchema(req.body);
    const authorCompare = await Author.findOne({ first_name });
    if (authorCompare) {
      return res.status(400).json({
        ok: false,
        msg: "this author already exists with this name",
      });
    }
    await author.save();
    res.json({
      ok: true,
      msg: "successful recorded author",
      first_name,
      last_name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};
const postBook = async (req, res = response) => {
  const { name, isbn } = req.body;
  try {
    let book = new Books(req.body);
    const bookCompare = await BooksAndAuthorSchema.findOne({ name });
    if (!bookCompare) {
      return res.status(400).json({
        ok: false,
        msg: "this book already exists with this name",
      });
    }
    await book.save();
    res.json({
      ok: true,
      msg: "successful recorded author",
      name,
      isbn,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

module.exports = {
  getBooks,
  postAuthor,
  postBook,
  getBookById,
  getAuthors,
  getAuthorById,
};
