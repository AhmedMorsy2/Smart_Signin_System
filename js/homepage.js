var userName = document.getElementById("userName");
var logoutBtn = document.getElementById("logoutBtn");
var user ;

user = localStorage.getItem("sessionUsername");

userName.innerHTML = `<h1 class='py-5'> Welcome ${user} </h1>`;

logoutBtn.addEventListener("click", function () {
  window.open("signup.html", "_self");
  localStorage.removeItem("sessionUsername");
});
