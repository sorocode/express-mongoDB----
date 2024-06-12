const Diary = require("../models/diaryItem");

exports.getDiary = (req, res, next) => {
  if (req.session.user) {
    res.render("diary");
  } else {
    console.log(
      "일기장을 보려면 먼저 로그인해야합니다. 로그인 화면으로 이동합니다."
    );
    res.redirect("/login");
  }
};
exports.getDiaryById = (req, res, next) => {
  if (req.session.user) {
    res.render("diary");
  } else {
    console.log(
      "일기장을 보려면 먼저 로그인해야합니다. 로그인 화면으로 이동합니다."
    );
    res.redirect("/login");
  }
};
exports.postDiary = async (req, res) => {
  const newDiary = new Diary({
    title: req.body.title,
    body: req.body.body,
    image: req.file.path,
  });
  await newDiary.save();
  res.redirect("/diaries");
};
