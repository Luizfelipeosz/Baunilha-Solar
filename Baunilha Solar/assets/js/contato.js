document.getElementById("send")
.addEventListener("click", () => {

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(!name || !email || !message){

alert("Preencha todos os campos");

return;

}

alert("Mensagem enviada com sucesso! 🌞");

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";

});