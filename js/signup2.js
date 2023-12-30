var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var signUpBtn = document.getElementById("signUpBtn");
var outputAlert = document.getElementById("outputAlert");

var layer = document.getElementById("layer");
var layer2 = document.getElementById("layer2");
var layer3 = document.getElementById("layer3");

var userData = [];

if (localStorage.getItem("userData") != null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function isEmpty() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function addUser() {
  // var emailExists = checkEmailExist(emailInput.value);
  // var newUser = {
  //   name: nameInput.value,
  //   email: emailInput.value,
  //   password: passwordInput.value,
  // };
  if (isEmpty() == false) {
    outputAlert.innerHTML =
      '<p class="text-danger m-3">All inputs is required</p>';
    return false;
  }
  if (!checkEmailExist()) {
    var newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    userData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(userData));
    outputAlert.innerHTML = '<p class="p-2 text-success">Success</p>';
  } else {
    outputAlert.innerHTML =
      '<p class="p-2 text-danger">Email Already Exist</p>';
  }
  clear();
}

function checkEmailExist() {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email.toLowerCase() === emailInput.value.toLowerCase()) {
      return true;
    }
  }
}

signUpBtn.addEventListener("click", function () {
  addUser();
});

function clear() {
  emailInput.value = "";
  nameInput.value = "";
  passwordInput.value = "";
}

function checkUserName() {
  var nameToCheck = nameInput.value;
  var pattern = /[A-Za-z]{3,}/;
  if (pattern.test(nameToCheck)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    layer.classList.add("d-none");
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    layer.classList.remove("d-none");
  }
}

function checkEmail() {
  var emailToCheck = emailInput.value;

  var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

  if (pattern.test(emailToCheck)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    layer2.classList.add("d-none");
  } else {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    layer2.classList.remove("d-none");
  }
}

function checkPassword() {
  var passwordToCheck = passwordInput.value;

  var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*_?&]{8,}$/;

  if (pattern.test(passwordToCheck)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    layer3.classList.add("d-none");
  } else {
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    layer3.classList.remove("d-none");
  }
}
