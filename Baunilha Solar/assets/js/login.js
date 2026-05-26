const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorBox = document.getElementById("error");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
password.type = password.type === "password" ? "text" : "password";
});

function showError(msg){
errorBox.style.display = "block";
errorBox.innerText = msg;
}

loginBtn.addEventListener("click", () => {

const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(u =>
u.username === username.value &&
u.password === password.value
);

if(!username.value || !password.value){
showError("Preencha todos os campos");
return;
}

if(!users.length){
showError("Nenhum usuário cadastrado");
return;
}

if(!user){
showError("Usuário ou senha incorretos");
return;
}

localStorage.setItem("session", JSON.stringify(user));

window.location.href = "index.html";

});