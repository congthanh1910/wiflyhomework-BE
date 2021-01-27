const router = require("express").Router();
const { createUser } = require("../controllers/user");

router.post("/add", createUser);

module.exports = router;
