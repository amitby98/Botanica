const { Router } = require("express");
const userRouter = Router();

userRouter.post("/login", (req, res) => {
  res.json({ message: "success" });
});

module.exports = { userRouter };
