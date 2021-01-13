const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Quizlet = new Schema(
  {
    rank: { type: String },
    topic: { type: String },
    match: { type: String }, //ghép thẻ
    learn: { type: String },
    test: { type: String },
    falshcards: { type: String }, 
    spell: { type: String }, //chính tả
  },
  {
    collection: "quizlet",
  }
);

module.exports = mongoose.model("Quizlet", Quizlet);
