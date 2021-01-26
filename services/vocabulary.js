const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Vocabulary = new Schema(
  {
    rank: { type: String },
    topic: { type: String },
    name: { type: String },
    match: { type: String }, //ghép thẻ
    learn: { type: String },
    test: { type: String },
    flashcards: { type: String },
    spell: { type: String }, //chính tả
  },
  {
    collection: "vocabulary",
  }
);

module.exports = mongoose.model("Vocabulary", Vocabulary);
