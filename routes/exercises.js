const router = require("express").Router();
const { findExercises } = require("../controllers/exercises");

router.get("/find", findExercises);

module.exports = router;
