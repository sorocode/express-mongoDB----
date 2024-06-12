exports.getLogin = (req, res, next) => {
  if (req.session.user) {
    console.log("이미 로그인된 상태입니다.");
    res.redirect("/diaries");
  } else {
    res.render("login");
  }
};
exports.postLogin = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/diaries");
  } else {
    req.session.user = {
      id: req.body.id,
      password: req.body.password,
    };
    res.redirect("/diary");
  }
};
