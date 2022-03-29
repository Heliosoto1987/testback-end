const { response } = require("express");

const getEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "Vamos por buen camino",
  });
};
