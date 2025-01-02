const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataFilePath = path.join(__dirname, "../data/suggestions.json");

let suggestions = []; // 伺服器端的資料存儲
const loadSuggestions = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    suggestions = JSON.parse(data);
  } catch (error) {
    console.error("Failed to load suggestions:", error);
    suggestions = [];
  }
};

// 保存數據
const saveSuggestions = () => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(suggestions, null, 2));
  } catch (error) {
    console.error("Failed to save suggestions:", error);
  }
};

// 初始化載入數據
loadSuggestions();

// 模擬頁面資料
const pages = {
  suggestions: { title: "React框架選擇建議", content: "這是 React 的建議。" },
};

// 定義路由
router.get("/:page?", (req, res) => {
  const page = req.params.page || "suggestions";
  const data = pages[page] || pages.suggestions;

  res.render("index", { page, data, suggestions });
});

// 編輯建議頁面
router.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < suggestions.length) {
    const suggestion = suggestions[index];
    res.render("index", { data: {title: "編輯建議"}, page: 'edit-suggestion', suggestion, index });
  } else {
    res.redirect("/suggestions");
  }
});

router.post("/add", (req, res) => {
  const { feature, reason } = req.body;
  if (feature && reason) {
    suggestions.push({ feature, reason });
    saveSuggestions(); // 保存數據
  }
  res.redirect("/suggestions");
});

router.post("/delete", (req, res) => {
  const { index } = req.body;
  if (index !== undefined && index < suggestions.length) {
    suggestions.splice(index, 1);
    saveSuggestions(); // 保存數據
  }
  res.redirect("/suggestions");
});

// 處理更新建議
router.post("/update/:index", (req, res) => {
  const { feature, reason } = req.body;
  const index = req.params.index;
  if (index >= 0 && index < suggestions.length) {
    suggestions[index] = { feature, reason };
    saveSuggestions();
  }
  res.redirect("/suggestions");
});

module.exports = router;
