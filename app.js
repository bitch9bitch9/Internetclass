const express = require("express");
const path = require("path");

const app = express();
const pagesRouter = require("./routes/pages"); // 引入路由檔案
const suggestionsRouter = require("./routes/suggestions");

// 設置 EJS 作為模板引擎
app.set("view engine", "ejs");

// 設置靜態文件路徑
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // 解析表單資料

// 使用 pages 路由
app.use("/", pagesRouter);
app.use("/suggestions", suggestionsRouter);

// 啟動伺服器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
