// カートウィンドウのDOM取得
const cartWindow = document.getElementById("cart-window");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsDOM = document.getElementById("cart-items");
const cartTotalDOM = document.getElementById("cart-total");


>>>>>>> Stashed changes

//カート情報をローカルストレージから取得（なければ空配列を返す）
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//カートウィンドウ表示関数
function openCartWindow() {
    cartWindow.classList.remove("hidden");
}
////カートウィンドウ非表示関数
function closeCartWindow() {
  cartWindow.classList.add("hidden");
}
// ======== 保存 ========
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", (e) => {
    //カートを表示
    openCartWindow()
    // localStorage に商品を保存
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      image: btn.dataset.image,
      quantity: 1
    };
    const item = cart.find(item => item.id ==product.id);

    if(item){
      item.quantity++;
    }else{
      cart.push(product);
    }
    saveCart()
    renderCart()
    // console.log(localStorage.getItem("cart"))
  });
});

// ======== カート描画 ========
function renderCart() {
  cartItemsDOM.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price * item.quantity}円</span>
      <div class="qty-box">
      <button class="qty-btn minus" data-id="${item.id}">−</button>
      <span class="qty-number">${item.quantity}</span>
      <button class="qty-btn plus" data-id="${item.id}">＋</button>
      </div>
    `;

    cartItemsDOM.appendChild(div);
  });

  cartTotalDOM.textContent =total;
  attachQtyEvents();
}

function attachQtyEvents() {
  // ＋ボタン
  document.querySelectorAll(".qty-btn.plus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      changeQuantity(id, 1,btn);
    });
  });

  // −ボタン
  document.querySelectorAll(".qty-btn.minus").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      console.log(btn)
      changeQuantity(id, -1,btn);
    });
  });
}

function changeQuantity(productId,diff,btnObj){
  console.log(btnObj)
  const item = cart.find(item => item.id == productId);
  if(!item)return;
  item.quantity = Math.max(1,item.quantity + diff);
  
  if(item.quantity==1){
    console.log(btnObj.classList.contains("minus"))
    btnObj.classList.replace("minus","delete");
    btnObj.textContent = "🗑️"
  }
  saveCart();
  renderCart();
}


closeCartBtn.addEventListener("click",(e)=>{
  closeCartWindow()
})

