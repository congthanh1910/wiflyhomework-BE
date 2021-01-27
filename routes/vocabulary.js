const router = require("express").Router();
const { findVocabulary } = require("../controllers/vocabulary");

router.get("/find", findVocabulary);

module.exports = router;
