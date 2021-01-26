const Exercises = require("../services/exercises");

async function createExercises(req, res) {
  const exercises = new Exercises(req.body);
  try {
    await exercises.save();
    res.status(200).json({ message: "New exercises created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
}

async function findExercises(req, res) {
  try {
    const data = await Exercises.find({
      rank: req.query.rank,
      topic: req.query.topic,
      skill: req.query.skill,
    });
    if (data.length !== 0) {
      return res.status(200).json({
        List: data,
      });
    } else {
      return res.status(201).json({
        message: "List Empty",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "server error. Please try again.",
      error: err.message,
    });
  }
}

async function deleteExercises(req, res) {
  const id = req.params.id;
  try {
    await Exercises.findByIdAndDelete(id);
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

module.exports = { createExercises, findExercises, deleteExercises };
