const Bookwidgets = require("../services/bookwidgets");

module.exports.createBookwidgets = function (req, res) {
  const bookwidgets = new Bookwidgets(req.body);

  return bookwidgets
    .save()
    .then(() => {
      return res
        .status(200)
        .json({ message: "New bookwidgets created successfully" });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};

module.exports.findBookwidgets = function (req, res) {
  Bookwidgets.find({
    rank: req.body.rank,
    topic: req.body.topic,
    skill: req.body.skill,
  })
    .then((Bookwidgets) => {
      if (Bookwidgets.length != 0) {
        return res.status(200).json({
          message: "Success",
          List: Bookwidgets,
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

module.exports.deleteBookwidgets = function (req, res) {
  const id = req.params.id;
  Bookwidgets.findByIdAndDelete(id)
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
