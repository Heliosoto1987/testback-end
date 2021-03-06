/*
    Users routes / Auth
    host + /api/auth
*/
const { Router } = require("express");
const router = Router();
const { createUser, login } = require("../controllers/auth");

//auth
router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
