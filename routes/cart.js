const express = require("express");
const router = express.Router();

// カートページ（中身は全部フロントJSで localStorage から読込）
router.get("/", (req, res) => {
  res.render("cart");
});

module.exports = router;