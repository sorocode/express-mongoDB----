const Diary = require("../models/diaryItem");
exports.fetchAlldiaries = async (req, res) => {
  const diaries = await Diary.find();
  res.render("diaries", { diaries });
  //   res.json(diaries);
};
exports.fetchDiaryById = async (req, res) => {
  const diary = await Diary.findById(req.params.id);
  res.send(diary);
  //   res.json(diaries);
};
