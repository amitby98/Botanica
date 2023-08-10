require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { productRouter } = require("./router/products-router");
const { userRouter } = require("./router/users-router");
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

app.use(express.static("client"));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.4peadmg.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });
