var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

function display(cartdata) {
  document.getElementById("container").innerText = "";
  cartdata.map(function (elem, index) {
    var childDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    var name = document.createElement("h4");
    name.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = 1 * elem.price * (elem.quantity * 1);
    var qntydiv = document.createElement("div");
    qntydiv.setAttribute("id", "innerdiv");
    var qtyno = document.createElement("p");
    qtyno.innerText = elem.quantity;
    var btn = document.createElement("button");
    btn.addEventListener("click", function () {
      increaseqnty(index);
    });
    btn.innerText = "+";

    var btn2 = document.createElement("button");
    btn2.addEventListener("click", function () {
      decreaseqnty(index);
    });
    btn2.innerText = "-";

    qntydiv.append(btn, qtyno, btn2);

    childDiv.append(img, name, price, qntydiv);
    document.querySelector("#container").append(childDiv);
  });
}

display(cartdata);

function showtotal() {
  var total = cartdata.reduce(function (acc, data) {
    return acc + data.price * data.quantity;
  }, 0);
  document.querySelector("#total").innerText = total;
}

function items_no() {
  var itemsno = cartdata.length;
  document.querySelector("#item_no").innerText = itemsno;
}

document.getElementById("apply_promo_btn").addEventListener("click", promocode);
var count = 0;
function promocode() {
  var inputpromo = document.querySelector("#inputpromo").value;
  if (inputpromo == "masai30" && count==0) {
    var total = Number(document.querySelector("#total").innerText);
    var promototal = total-30/100*total;
    count++;
    document.querySelector("#total").innerText = promototal
    display(cartdata);
  }
  else if(count>0){
    alert("Promocode Is Already Used");
  }
  else{
    alert("Invalid Promocode")
  }
}

showtotal();
items_no();

document.querySelector("#home").addEventListener("click", home);

function home() {
  window.location.href = "Shop.html";
}

document.querySelector("#checkout_btn").addEventListener("click",checkout)

function checkout() {
  window.location.href = "payment.html";
}

function increaseqnty(index) {
  cartdata[index].quantity++;
  localStorage.setItem("cartdata", JSON.stringify(cartdata));
  display(cartdata);
  showtotal();
  items_no();
}

function decreaseqnty(index) {
  if (cartdata[index].quantity * 1 > 1) {
    cartdata[index].quantity--;
    localStorage.setItem("cartdata", JSON.stringify(cartdata));
    display(cartdata);
  } else {
    cartdata.splice(index, 1);
    localStorage.setItem("cartdata", JSON.stringify(cartdata));
    display(cartdata);
  }
  showtotal();
  items_no();
}
