
const router = require("express").Router();
const fs = require("fs");
const path = require("path");

// 仮のDBデータ
// const products = [
//   { id: 1, name: "Tシャツ", price: 3000 },
//   { id: 2, name: "パーカー", price: 5000 },
//   { id: 3, name: "キャップ", price: 2500 },
// ];

// 商品一覧
router.get("/", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf8")
  );
  res.render("products", { products });
});

router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).send("Not Found");
  res.render("product", { title: "商品詳細", product });
});

module.exports = router;
