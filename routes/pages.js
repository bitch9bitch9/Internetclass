const express = require("express");
const router = express.Router();

// 模擬頁面資料
const pages = {
  home: { title: "React首頁", content: "歡迎來到 React 的首頁！" },
  features: { title: "React特徵", content: "這是 React 的特徵介紹。" },
  examples: { title: "React範例", content: "這是一些 React 的範例。" },
  resources: { title: "React來源", content: "這是 React 的相關資源。" },
  advantages: { title: "React優勢", content: "這是 React 的優勢。" },
};

// 定義路由
router.get("/:page?", (req, res, next) => {
  if (req.params.page === "suggestions") return next();
  const page = req.params.page || "home";
  const data = pages[page] || pages.home;

  res.render("index", { page, data });
});

module.exports = router;
