const username = document.getElementById("username");
const password = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const errorBox = document.getElementById("error");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
password.type = password.type === "password" ? "text" : "password";
});

function showError(msg){
errorBox.style.display = "block";
errorBox.innerText = msg;
}

registerBtn.addEventListener("click", () => {

let users = JSON.parse(localStorage.getItem("users")) || [];

if(!username.value || !password.value){
showError("Preencha todos os campos");
return;
}

const exists = users.find(u => u.username === username.value);

if(exists){
showError("Usuário já existe");
return;
}

users.push({
username: username.value,
password: password.value
});

localStorage.setItem("users", JSON.stringify(users));

window.location.href = "login.html";

});