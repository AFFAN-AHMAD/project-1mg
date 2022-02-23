var mensData = JSON.parse(localStorage.getItem("mensData"));
var womensData = JSON.parse(localStorage.getItem("womensData"));
var carts = JSON.parse(localStorage.getItem("cartdata")) || [];

function display(mensData, womensData) {
  document.querySelector("#container").innerText = "";
  mensData.map(function (elem) {
    elem.brand = "Menswear";
    var childDiv = document.createElement("div");
    var innerDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    var name = document.createElement("p");
    name.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = elem.price;
    var strikedoffprice = document.createElement("s");
    strikedoffprice.innerText = elem.strikedoffprice;
    var addtocartbtn = document.createElement("button");
    addtocartbtn.innerText = "Add to Cart";
    addtocartbtn.addEventListener("click", function () {
      addtocartfun(elem);
    });
    innerDiv.append(price, strikedoffprice);
    innerDiv.setAttribute("class", "innerdiv");
    childDiv.append(img, name, innerDiv, addtocartbtn);
    document.querySelector("#container").append(childDiv);
  });

  womensData.map(function (elem) {
    elem.brand = "Womenswear";
    var childDiv = document.createElement("div");
    var innerDiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    var name = document.createElement("p");
    name.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = elem.price;
    var strikedoffprice = document.createElement("s");
    strikedoffprice.innerText = elem.strikedoffprice;
    var addtocartbtn = document.createElement("button");
    addtocartbtn.innerText = "Add to Cart";
    addtocartbtn.addEventListener("click", function () {
      addtocartfun(elem);
    });
    innerDiv.append(price, strikedoffprice);
    innerDiv.setAttribute("class", "innerdiv");
    childDiv.append(img, name, innerDiv, addtocartbtn);
    document.querySelector("#container").append(childDiv);
  });
  document.querySelector("#cart").addEventListener("click", cart);

  function cart() {
    window.location.href = "Cart.html";
  }

  function addtocartfun(elem) {
    carts.push(elem);
    elem.quantity = 1;
    localStorage.setItem("cartdata", JSON.stringify(carts));
  }
}

display(mensData, womensData);

var sorter = document.querySelector("#pricefilter");
sorter.addEventListener("change", sortitems);

function sortitems() {
  // console.log("sort")
  if (sorter.value == "htl") {
    mensData.sort(function (a, b) {
      return b.price - a.price;
    });
    womensData.sort(function (a, b) {
      return b.price - a.price;
    });
    display(mensData, womensData);
  } else if (sorter.value == "lth") {
    mensData.sort(function (a, b) {
      return a.price - b.price;
    });
    womensData.sort(function (a, b) {
      return a.price - b.price;
    });
    display(mensData, womensData);
  }
}

var searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", search);
function search() {
  // console.log(searchbar.value);
  var filtermendata = mensData.filter(function (elem) {
    return elem.name.includes(searchbar.value);
  });
  var filterwomendata = womensData.filter(function (elem) {
    return elem.name.includes(searchbar.value);
  });
  display(filtermendata, filterwomendata);
}

document.getElementById("searchbtn").addEventListener("click", function () {
  document.getElementById("searchbar").style.display = "inline-block";
});

var sorterbrand = document.querySelector("#brandfilter");
sorterbrand.addEventListener("change", sortitemsbybrand);

function sortitemsbybrand() {
  // console.log(searchbar.value);
  var filtermendata = mensData.filter(function (elem) {
    return elem.name.includes(sorterbrand.value);
  });
  var filterwomendata = womensData.filter(function (elem) {
    return elem.name.includes(sorterbrand.value);
  });
  display(filtermendata, filterwomendata);
}
