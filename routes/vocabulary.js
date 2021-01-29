const router = require("express").Router();
const { findVocabulary } = require("../controllers/vocabulary");

router.get("/", findVocabulary);

module.exports = router;
