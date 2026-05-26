const cart = JSON.parse(
localStorage.getItem(
"cart"
)
) || [];

document
.getElementById(
"cartCount"
)
.innerText =
cart.length;

window.addEventListener(
"scroll",
()=>{

const header =
document.querySelector(
"header"
);

if(
window.scrollY > 60
){

header.style.background =
"#fff8f0";

}

else{

header.style.background =
"transparent";

}

}
);

document
.querySelectorAll(
".card"
)

.forEach(
card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.scale=
"1.02";

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.scale=
"1";

}
);

}
);
const session =
JSON.parse(localStorage.getItem("session"));

if(!session){

console.log("Usuário não logado");

}