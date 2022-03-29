const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("La base de datos esta online");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection,
};
