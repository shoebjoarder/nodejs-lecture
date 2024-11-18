const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydb", {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });
