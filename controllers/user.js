const bcrypt = require("bcrypt");
const User = require("../services/user");

async function createUser(req, res) {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  try {
    await user.save();
    res.status(200).json({ message: "New user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
}

module.exports = { createUser };
