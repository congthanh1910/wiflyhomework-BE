const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Exercises = new Schema(
  {
    rank: { type: String },
    topic: { type: String },
    skill: { type: String },
    level: { type: String },
    name: { type: String },
    link: { type: String },
  },
  {
    collection: "exercises",
  }
);

module.exports = mongoose.model("Exercises", Exercises);
