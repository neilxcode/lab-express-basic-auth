const express    = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("site/home");
});

router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

router.get("/secret", (req, res, next) => {
  const username = req.session.currentUser.username;
  res.render("site/secret", {username: username});
});

router.get("/main", (req, res, next) => {
  const username = req.session.currentUser.username;
  res.render("site/main");
});

router.get("/private", (req, res, next) => {
  const username = req.session.currentUser.username;
  res.render("site/private");
});

module.exports = router;