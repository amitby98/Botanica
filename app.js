require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const mongoose = require("mongoose");
const { productRouter } = require("./router/products-router");
const { userRouter } = require("./router/users-router");
const { orderRouter } = require("./router/orders-router");
const { addressRouter } = require("./router/addresses-router");
const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static("client"));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/addresses", addressRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`connected to MongoDB`);
    httpServer.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });

let connectedUsers = 0;
io.on("connection", socket => {
  connectedUsers++;
  io.emit("userCount", connectedUsers);
  socket.on("disconnect", () => {
    connectedUsers--;
    io.emit("userCount", connectedUsers);
  });
});
