/*
    event routes / Events
    host + /api/events
*/
const { Router } = require("express");
const router = Router();
const {
  getBooks,
  postAuthor,
  postBook,
  getBookById,
  getAuthors,
  getAuthorById,
} = require("../controllers/events");

//Events
router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.get("/authors", getAuthors);
router.get("/author/:id", getAuthorById);
router.post("/author", postAuthor);
router.post("/book", postBook);

module.exports = router;
