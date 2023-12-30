var mailInput = document.getElementById("mailInput");
var passwordInput = document.getElementById("passwordInput");
var loginBtn = document.getElementById("loginBtn");

var incorrect = document.getElementById("incorrect");

var loginData = [];

if (localStorage.getItem("userData") != null) {
  loginData = JSON.parse(localStorage.getItem("userData"));
}

function isLoginEmpty() {
  if (passwordInput.value == "" || mailInput.value == "") {
    return false;
  } else {
    return true;
  }
}

function signIn() {
  if (isLoginEmpty() == false) {
    document.getElementById("incorrect").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }
  if (checkEmailExist()) {
    loginBtn.addEventListener("click", function () {
      window.location.href = "/homepage.html";
    });
  } else {
    incorrect.innerHTML =
      '<p class="p-2 text-danger">incorrect email or password</p>';
  }
}

function checkEmailExist() {
  for (var i = 0; i < loginData.length; i++) {
    if (
      loginData[i].email.toLowerCase() === mailInput.value.toLowerCase() &&
      loginData[i].password.toLowerCase() === passwordInput.value.toLowerCase()
    ) {
      localStorage.setItem("sessionUsername", loginData[i].name);
      return true;
    }
  }
}

loginBtn.addEventListener("click", function () {
  signIn();
});
