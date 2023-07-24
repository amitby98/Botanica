const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./router/users-router");
const app = express();

app.use(express.static("client"));

app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("server is ready");
});

const mongoUri = "mongodb+srv://admin:admin@cluster0.4peadmg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
});
mongoose.connect(mongoUri);
