const products = [
{
id: 1,
name: "Brownie Solar",
price: 18,
category: "brownie"
},
{
id: 2,
name: "Torta de Baunilha",
price: 25,
category: "torta"
},
{
id: 3,
name: "Bolo de Chocolate",
price: 35,
category: "bolo"
},
{
id: 4,
name: "Caixa Presente",
price: 60,
category: "presente"
}
];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("products");

function render(list){

container.innerHTML = "";

list.forEach(p => {

const card =
document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<div class="image"></div>
<div class="content">
<h3>${p.name}</h3>
<p>R$ ${p.price}</p>
<button class="add">Adicionar</button>
</div>
`;

card.querySelector(".add")
.addEventListener("click", () => {

addToCart(p);

});

container.appendChild(card);

});

}

function addToCart(product){

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

}

function updateCartCount(){

document.getElementById("cartCount")
.innerText = cart.length;

}

document.querySelectorAll(".filters button")
.forEach(btn => {

btn.addEventListener("click", () => {

const filter = btn.dataset.filter;

if(filter === "all"){

render(products);

}else{

render(products.filter(p => p.category === filter));

}

});

});

render(products);
updateCartCount();