const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//Create express server
const app = express();

//Data Base Conection
dbConnection();

//Public Directory
app.use(express.static("public"));

//Reading and analysis of the body
app.use(express.json());

//auth path
app.use("/api/auth", require("./routes/auth"));

//events.path
app.use("/api/events", require("./routes/events"));

//Listen Requests
app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
);
