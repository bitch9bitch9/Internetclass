// app.js
const express = require("express");
const path = require("path");

const app = express();

// 設置 EJS 作為模板引擎
app.set("view engine", "ejs");

// 設置靜態文件路徑
app.use(express.static(path.join(__dirname, "public")));

// 路由配置
app.get("/:page?", (req, res) => {
  const pages = {
    home: { title: "React首頁", content: "歡迎來到 React 的首頁！" },
    features: { title: "React特徵", content: "這是 React 的特徵介紹。" },
    examples: { title: "React範例", content: "這是一些 React 的範例。" },
    resources: { title: "React來源", content: "這是 React 的相關資源。" },
    resources: { title: "React優勢", content: "這是 React 的優勢。" },
  };

  // 確認頁面是否存在，否則預設為首頁
  const page = req.params.page || "home";
  const data = pages[page] || pages.home;

  res.render("index", { page, data });
});


// 啟動伺服器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
