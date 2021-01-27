const router = require("express").Router();
const passport = require("passport");
const { createUser } = require("../controllers/user");
const { allVocabulary } = require("../controllers/vocabulary");
const { allExercises } = require("../controllers/exercises");

router.post("/add", createUser);
router.get(
  "/vocabulary/all",
  passport.authenticate("jwt", { session: false }),
  allVocabulary
);
router.get(
  "/exercises/all",
  passport.authenticate("jwt", { session: false }),
  allExercises
);

module.exports = router;
