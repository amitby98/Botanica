const { UserModel } = require("../models/user-model");

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }
  const user = await UserModel.findOne({ username, password }).select("-password");
  if (!user) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  res.json({ user });
}

async function register(req, res) {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    return res.status(400).json({ message: "Missing username, role or password" });
  }

  try {
    const user = await UserModel.create({ username, password, role });
    const userData = user.toObject();
    delete userData.password;
    res.json({ user: userData });
  } catch (err) {
    if (err.message.startsWith("E11000 duplicate key error")) {
      return res.status(400).send("Username already exists");
    }
    return res.status(500).send("Something went wrong");
  }
}

module.exports = { login, register };
