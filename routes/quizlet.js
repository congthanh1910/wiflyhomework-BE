const router = require("express").Router();

const {
  createQuizlet,
  findQuizlet,
  deleteQuizlet,
} = require("../controllers/quizlet");

router.post("/add", createQuizlet);

router.get("/all", findQuizlet);

router.delete("/:id", deleteQuizlet);

module.exports = router;
