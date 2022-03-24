function mainpage() {
  window.location.href = "index.html";
}

function lab_test_page() {
  window.location.href = "lab.html";
}

function ask_doc_page() {
  window.location.href = "AskDoctor.html";
}

function covid_page() {
  window.location.href = "index.html";
}

function ayurveda_page() {
  window.location.href = "Ayurveda.html";
}
function care_plan_page() {
  window.location.href = "index.html";
}

function cart_page() {
  window.location.href = "Cart.html";
}

var user = JSON.parse(localStorage.getItem("userdata"))||[];
  
  if(user.length==0){
    var log = document.createElement("a")
    log.setAttribute("href","login.html")
    log.setAttribute("class","logandsign")
    log.innerText="Login  | "
    // <a href="login.html" class="logandsign">Login  |</a>
    var sign = document.createElement("a")
    sign.setAttribute("href","signUp.html")
    sign.setAttribute("class","logandsign")
    sign.innerText="Sign Up"
    // var sign = <a href="signUp.html" class="logandsign">Sign Up</a>
    // document.getElementById("user").append(log,sign);                           
  }

  if(user.length!=0)
  {
    var logout = document.createElement("a")
    logout.addEventListener("click",function(){
      localStorage.removeItem("userdata");
      document.location.reload()
    })
    logout.setAttribute("class","logandsign")
    logout.style.marginLeft="10px"
    logout.innerText="LogOUT"

    var e = "";
    for(var i=0;i<8;i++)
    {
      e += user[0].email[i];
    }
    document.querySelector("#user").innerText= "Hi "+e
    document.querySelector("#user").append(logout)
  }