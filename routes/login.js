const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "abc123";
const router = require("express").Router();
const User = require("../services/user");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res) {
  const { username, password } = req.body;
  if (username && password) {
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ message: "No such admin found" });
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      res.json({
        message: "ok",
        token: token,
      });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

module.exports = router;
