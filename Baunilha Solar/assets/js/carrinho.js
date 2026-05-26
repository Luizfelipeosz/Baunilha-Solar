let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("cartItems");

const totalEl =
document.getElementById("total");

function renderCart(){

container.innerHTML = "";

if(cart.length === 0){

container.innerHTML = "<p>Seu carrinho está vazio.</p>";

totalEl.innerText = "R$ 0";

return;

}

let total = 0;

cart.forEach((item, index) => {

total += item.price;

const div =
document.createElement("div");

div.classList.add("item");

div.innerHTML = `
<div>
<strong>${item.name}</strong>
<p>R$ ${item.price}</p>
</div>

<button>Remover</button>
`;

div.querySelector("button")
.addEventListener("click", () => {

removeItem(index);

});

container.appendChild(div);

});

totalEl.innerText =
"R$ " + total;

}

function removeItem(index){

cart.splice(index, 1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

document.getElementById("clearCart")
.addEventListener("click", () => {

cart = [];

localStorage.removeItem("cart");

renderCart();

});

document.getElementById("checkout")
.addEventListener("click", () => {

alert("Pedido realizado com sucesso! 🍰");

cart = [];

localStorage.removeItem("cart");

renderCart();

});

renderCart();