const Vocabulary = require("../services/vocabulary");

async function createVocabulary(req, res) {
  const vocabulary = new Vocabulary(req.body);
  try {
    await vocabulary.save();
    res.status(200).json({ message: "New vocabulary created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
}

async function allVocabulary(req, res) {
  try {
    const data = await Vocabulary.find();
    if (data.length !== 0) {
      return res.status(200).json({
        List: data,
      });
    } else {
      return res.status(201).json({
        message: "List Empty ",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: err.message,
    });
  }
}

async function findVocabulary(req, res) {
  try {
    const data = await Vocabulary.find({
      rank: req.query.rank,
      topic: req.query.topic,
    });
    if (data.length !== 0) {
      return res.status(200).json({
        List: data,
      });
    } else {
      return res.status(201).json({
        message: "List Empty ",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: err.message,
    });
  }
}

async function deleteVocabulary(req, res) {
  const id = req.params.id;
  try {
    await Vocabulary.findByIdAndDelete(id);
    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    res.status(400).json({
      message: "Server error. Please try again.",
      error: err.message,
    });
  }
}

module.exports = {
  createVocabulary,
  findVocabulary,
  allVocabulary,
  deleteVocabulary,
};
