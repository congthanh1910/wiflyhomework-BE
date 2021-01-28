const bcrypt = require("bcrypt");
const User = require("../services/user");

async function createUser(req, res) {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  try {
    await user.save();
    res.json({ message: "New user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
}

async function changePassword(req, res) {
  const userId = req.user._id;
  const oldPass = req.body.oldPass;
  const newPass = req.body.newPass;
  const currentPassHashed = req.user.password;
  const verifyPassword = bcrypt.compareSync(oldPass, currentPassHashed);
  if (!verifyPassword) {
    return res.status(400).send({
      error: `Old password didn't match.`,
    });
  }
  await User.findOneAndUpdate(
    { _id: userId },
    { password: bcrypt.hashSync(newPass, 10) },
    {
      new: true,
    }
  );
  res.json({
    message: "Successfully updated password.",
  });
}

module.exports = { createUser, changePassword };
