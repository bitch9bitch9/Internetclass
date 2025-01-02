// app.js
const express = require("express");
const path = require("path");

const app = express();

// 設置 EJS 作為模板引擎
app.set("view engine", "ejs");

// 設置靜態文件路徑
app.use(express.static(path.join(__dirname, "public")));

// 路由配置
app.get("/", (req, res) => {
  res.render("index", {
    title: "React介紹",
    page: "home",
    hero: {
      title: "React 概括",
      description: "React 是一個由 Facebook 開發的 JavaScript 庫，用於構建用戶界面。它採用了組件化的設計理念，將界面拆分為可重用的組件，讓開發者能更高效地管理應用的邏輯與視圖。React 的核心特性包括虛擬 DOM、單向數據流，以及支持聲明式編程，這使得它在處理動態數據和大型應用時具有高效性和靈活性。React 不僅適用於網頁開發，還能通過 React Native 構建跨平台的移動應用。",
    },
  });
});

app.get("/features", (req, res) => {
  res.render("features", {
    title: "React特徵",
    page: "features",
    features: [
      { title: "組件", description: "建立管理其自身狀態的封裝元件，然後組合它們以建立複雜的 UI。" },
      { title: "聲明", description: "React 讓建立互動式 UI 變得輕而易舉。為應用程式中的每個狀態設計視圖。" },
      { title: "虛擬 DOM", description: "當資料發生變化時，React 會有效率地更新並僅呈現必要的元件。" },
    ],
  });
});

app.get("/examples", (req, res) => {
  res.render("examples", {
    title: "React範例",
    page: "examples",
    examples: [
      { title: "組件", description: "建立管理其自身狀態的封裝元件，然後組合它們以建立複雜的 UI。" },
      { title: "聲明", description: "React 讓建立互動式 UI 變得輕而易舉。為應用程式中的每個狀態設計視圖。" },
      { title: "虛擬 DOM", description: "當資料發生變化時，React 會有效率地更新並僅呈現必要的元件。" },
    ],
  });
});

app.get("/resources", (req, res) => {
  res.render("resources", {
    title: "React來源",
    page: "resources",
    resources: [
      { title: "組件", description: "建立管理其自身狀態的封裝元件，然後組合它們以建立複雜的 UI。" },
      { title: "聲明", description: "React 讓建立互動式 UI 變得輕而易舉。為應用程式中的每個狀態設計視圖。" },
      { title: "虛擬 DOM", description: "當資料發生變化時，React 會有效率地更新並僅呈現必要的元件。" },
    ],
  });
});

app.get("/advantages", (req, res) => {
  res.render("advantages", {
    title: "React優勢",
    page: "advantages",
    advantages: [
      { title: "組件", description: "建立管理其自身狀態的封裝元件，然後組合它們以建立複雜的 UI。" },
      { title: "聲明", description: "React 讓建立互動式 UI 變得輕而易舉。為應用程式中的每個狀態設計視圖。" },
      { title: "虛擬 DOM", description: "當資料發生變化時，React 會有效率地更新並僅呈現必要的元件。" },
    ],
  });
});

// 啟動伺服器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
