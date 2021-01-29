const router = require("express").Router();
const { findExercises } = require("../controllers/exercises");

router.get("/", findExercises);

module.exports = router;
