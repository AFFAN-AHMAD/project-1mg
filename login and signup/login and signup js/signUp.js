document.querySelector("#form").addEventListener("submit", signUp);
var userdataArr = JSON.parse(localStorage.getItem("userdata")) || [];

function signUp(event) {
  event.preventDefault();
  var userObj = {
    email: document.querySelector("#email").value,
    phonenum: document.querySelector("#phonenum").value,
    pass: document.querySelector("#pass").value,
  };
  userdataArr.push(userObj);
  localStorage.setItem("userdata", JSON.stringify(userdataArr));
}

var inbtn = document.querySelector("input[type='submit']");
inbtn.value = "Create an account";
inbtn.addEventListener("click", function () {
  window.location.href = "login.html";
});
