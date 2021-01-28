const Exercises = require("../services/exercises");

async function createExercises(req, res) {
  const exercises = new Exercises(req.body);
  try {
    await exercises.save();
    res.json({ message: "New exercises created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
}

async function allExercises(req, res) {
  try {
    const data = await Exercises.find();
    if (data.length !== 0) {
      return res.json({
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

async function findExercises(req, res) {
  try {
    const data = await Exercises.find({
      rank: req.query.rank,
      topic: req.query.topic,
      skill: req.query.skill,
    });
    if (data.length !== 0) {
      return res.json({
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

async function updateExercises(req, res) {
  const { _id, rank, topic, skill, level, name, link } = req.body;
  console.log("req: ", req.body);

  try {
    const exercises = await Exercises.findById(_id);
    if (!exercises) {
      return res.status(201).json({
        message: "No such exercises found",
      });
    }

    await Exercises.findByIdAndUpdate(
      { _id: _id },
      {
        rank: rank,
        topic: topic,
        skill: skill,
        level: level,
        name: name,
        link: link,
      },
      {
        new: true,
      }
    );
    return res.json({ message: "Exercises update successfully" });
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
    res.json({
      message: "Exercises delete successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: "Server error. Please try again.",
      error: err.message,
    });
  }
}

module.exports = {
  createExercises,
  findExercises,
  allExercises,
  updateExercises,
  deleteExercises,
};
