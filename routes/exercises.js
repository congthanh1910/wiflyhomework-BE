const router = require("express").Router();
const {
  createExercises,
  findExercises,
  deleteExercises,
} = require("../controllers/exercises");

router.post("/add", createExercises);
router.get("/all", findExercises);
router.delete("/delete/:id", deleteExercises);

module.exports = router;
