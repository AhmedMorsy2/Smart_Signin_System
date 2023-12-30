var userName = document.getElementById("userName");
var users = [];
var logoutBtn = document.getElementById("logoutBtn");
var user = [];

if (JSON.parse(localStorage.getItem("userData")) != null) {
  users = JSON.parse(localStorage.getItem("userData"));
}

user = localStorage.getItem("sessionUsername");

userName.innerHTML = `<h1 class='py-5'> Welcome ${user} </h1>`;

logoutBtn.addEventListener("click", function () {
  window.location.href = "/signup.html";
  localStorage.removeItem("sessionUsername");
});
