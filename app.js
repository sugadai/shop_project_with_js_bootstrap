const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ProductsRouter = require("./routes/products")
const CartRouter = require("./routes/cart")

dotenv.config();

app.set("view engine","ejs");
app.use(express.static("public"))
app.use(express.json());

app.get("/",(req,res)=>{
    res.render("index",{title:"NEW HSOP"});
})


//ルーティング設定
app.use("/products",ProductsRouter);
app.use("/cart",CartRouter)

//ホーム
app.get("/",(req,res)=>{
    res.send("Hello Node.js")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`✅Server Running url is http://localhost:${PORT}/`)
})