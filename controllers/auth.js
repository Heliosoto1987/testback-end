const { response } = require("express");

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 3 || email.length < 3 || password.length < 3) {
    return res.status(400).json({
      ok: false,
      msg: "Error auth",
    });
  }
  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const login = (req, res = response) => {
  const { email, password } = req.body;
  if (email.length < 3 || password.length < 3) {
    return res.status(400).json({
      ok: false,
      msg: "Error auth",
    });
  }

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

module.exports = {
  createUser,
  login,
};
