exports.getLogin = (req, res, next) => {
  if (req.session.user) {
    console.log("이미 로그인된 상태입니다. 홈페이지로 이동합니다.");
    res.redirect("/");
  } else {
    res.render("login");
  }
};
exports.postLogin = (req, res, next) => {
  if (req.session.user) {
    console.log("이미 로그인된 상태입니다.");
    res.redirect("/");
  } else {
    req.session.user = {
      id: req.body.id,
      password: req.body.password,
    };
    res.redirect("/diary");
  }
};
