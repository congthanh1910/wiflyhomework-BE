const router = require("express").Router();
const {
  createVocabulary,
  findVocabulary,
  deleteVocabulary,
} = require("../controllers/vocabulary");

router.post("/add", createVocabulary);
router.get("/all", findVocabulary);
router.delete("/delete/:id", deleteVocabulary);

module.exports = router;
