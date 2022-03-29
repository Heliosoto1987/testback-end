/*
    event routes / Events
    host + /api/events
*/
const { Router } = require("express");
const router = Router();
const { getBooks, postAuthor, postBook } = require("../controllers/events");

//Events
router.get("/books", getBooks);
// // router.get("/books", createUser); id
// router.get("/authors", createUser);
// // router.get("/author", createUser); id
router.post("/author", postAuthor);
router.post("/book", postBook);

module.exports = router;
