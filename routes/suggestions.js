const express = require("express");
const router = express.Router();

let suggestions = []; // 伺服器端的資料存儲

router.get("/", (req, res) => {
  res.render("suggestions", { suggestions });
});

router.post("/add", (req, res) => {
  const { feature, reason } = req.body;
  suggestions.push({ feature, reason });
  res.redirect("/suggestions");
});

router.post("/delete", (req, res) => {
  const { index } = req.body;
  suggestions.splice(index, 1);
  res.redirect("/suggestions");
});

module.exports = router;
