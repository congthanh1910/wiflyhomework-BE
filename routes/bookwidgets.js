const router = require("express").Router();

const {
  createBookwidgets,
  findBookwidgets,
  deleteBookwidgets,
} = require("../controllers/bookwidgets");

router.post("/add", createBookwidgets);

router.get("/all", findBookwidgets);

router.delete("/:id", deleteBookwidgets);

module.exports = router;
