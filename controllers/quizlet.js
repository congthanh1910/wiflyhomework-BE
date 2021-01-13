const Quizlet = require("../services/quizlet");

module.exports.createQuizlet = function (req, res) {
  const quizlet = new Quizlet(req.body);

  return quizlet
    .save()
    .then(() => {
      return res
        .status(200)
        .json({ message: "New quizlet created successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).join({
        message: "Server error. Please try again",
        error: error.message,
      });
    });
};

module.exports.findQuizlet = function (req, res) {
  Quizlet.find({
    rank: req.body.rank,
    topic: req.body.topic,
  })
    .then((Quizlet) => {
      if (Quizlet.length != 0) {
        return res.status(200).json({
          message: "Success",
          List: Quizlet,
        });
      } else {
        return res.status(201).json({
          message: "List Empty ",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

module.exports.deleteQuizlet = function (req, res) {
  const id = req.params.id;
  Quizlet.findByIdAndDelete(id)
    .exec()
    .then(() =>
      res.status(200).json({
        success: true,
      })
    )
    .catch((err) =>
      res.status(400).json({
        success: false,
        error: err.message,
      })
    );
};
