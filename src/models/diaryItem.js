const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});
const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
