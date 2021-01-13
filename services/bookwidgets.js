const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Bookwidgets = new Schema(
  {
    rank: { type: String },
    topic: { type: String },
    skill: { type: String },
    level: { type: String },
    name: { type: String },
    link: { type: String },
  },
  {
    collection: "bookwidgets",
  }
);

module.exports = mongoose.model("Bookwidgets", Bookwidgets);
