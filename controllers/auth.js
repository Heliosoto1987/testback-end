const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 3 || email.length < 3 || password.length < 3) {
    return res.status(400).json({
      ok: false,
      msg: "Error auth",
    });
  }
  try {
    let user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: "register",
      name,
      email,
      password,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

const login = async (req, res = response) => {
  const { email, password } = req.body;
  if (email.length < 3 || password.length < 3) {
    return res.status(400).json({
      ok: false,
      msg: "Error auth",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "the user does not exist with this email",
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

module.exports = {
  createUser,
  login,
};
