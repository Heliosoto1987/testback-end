const express = require("express");
require("dotenv").config();

//Crear el servidor de express
const app = express();

//Directorio Publico
app.use(express.static("public"));

//Lectura y parseio del body
app.use(express.json());

//Ruta de auth
app.use("/api/auth", require("./routes/auth"));

//Escuchar Peticiones
app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en ${process.env.PORT}`)
);
