const router = require("express").Router();
const passport = require("passport");
const { createUser, changePassword } = require("../controllers/user");
const {
  allVocabulary,
  updateVocabulary,
} = require("../controllers/vocabulary");
const { allExercises, updateExercises } = require("../controllers/exercises");

router.post("/add", createUser);

router.post(
  "/changePassword",
  passport.authenticate("jwt", { session: false }),
  changePassword
);

router.get(
  "/vocabulary/all",
  passport.authenticate("jwt", { session: false }),
  updateVocabulary
);
router.put(
  "/vocabulary/update",
  passport.authenticate("jwt", { session: false }),
  allVocabulary
);

router.get(
  "/exercises/all",
  passport.authenticate("jwt", { session: false }),
  allExercises
);
router.put(
  "/exercises/update",
  passport.authenticate("jwt", { session: false }),
  updateExercises
);

module.exports = router;
