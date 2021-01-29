const router = require("express").Router();
const passport = require("passport");
const {
  createUser,
  changePassword,
  deleteUser,
} = require("../controllers/user");
const {
  allVocabulary,
  updateVocabulary,
  createVocabulary,
  deleteVocabulary,
} = require("../controllers/vocabulary");
const {
  allExercises,
  updateExercises,
  createExercises,
  deleteExercises,
} = require("../controllers/exercises");

router.post("/create", createUser);
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  deleteUser
);

router.post(
  "/changePassword",
  passport.authenticate("jwt", { session: false }),
  changePassword
);

router.post(
  "/vocabulary/add",
  passport.authenticate("jwt", { session: false }),
  createVocabulary
);

router.get(
  "/vocabulary/all",
  passport.authenticate("jwt", { session: false }),
  allVocabulary
);

router.put(
  "/vocabulary/update",
  passport.authenticate("jwt", { session: false }),
  updateVocabulary
);

router.delete(
  "/vocabulary/delete/:id",
  passport.authenticate("jwt", { session: false }),
  deleteVocabulary
);

router.post(
  "/exercises/add",
  passport.authenticate("jwt", { session: false }),
  createExercises
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

router.delete(
  "/exercises/delete/:id",
  passport.authenticate("jwt", { session: false }),
  deleteExercises
);

module.exports = router;
