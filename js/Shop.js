var productdata = JSON.parse(localStorage.getItem("productdata"))||[];
// var womensData = JSON.parse(localStorage.getItem("womensData"));
var carts = JSON.parse(localStorage.getItem("cartdata")) || [];
// console.log(productdata)
function display(productdata) {
    document.querySelector("#container").innerText = "";
    productdata.map(function(elem) {
        elem.brand = "Muscle Blaze";
        var childDiv = document.createElement("div");
        var innerDiv = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", elem.image_url);
        var name = document.createElement("p");
        name.innerText = elem.name;
        var price = document.createElement("p");
        price.innerText = elem.price;
        var strikedoffprice = document.createElement("s");
        strikedoffprice.innerText =
            elem.mrp;
        var addtocartbtn = document.createElement("button");
        addtocartbtn.innerText = "Add to Cart";
        addtocartbtn.addEventListener("click", function() {
            addtocartfun(elem);
        });
        innerDiv.append("MRP:-", strikedoffprice, "Offer:-", price);
        innerDiv.setAttribute("class", "innerdiv");
        childDiv.append(img, name, innerDiv, addtocartbtn);
        document.querySelector("#container").append(childDiv);
    });
    // document.querySelector("#cart").addEventListener("click", cart);

    function cart() {
        window.location.href = "Cart.html";
    }

    function addtocartfun(elem) {
        carts.push(elem);
        elem.quantity = 1;
        cartnum();
        localStorage.setItem("cartdata", JSON.stringify(carts));
    }
}

cartnum();

display(productdata);

function cartnum(){
if(carts!=[])
{
  document.querySelector(".count").innerText=carts.length;
  display(productdata);
}
}


var sorter = document.querySelector("#pricefilter");
sorter.addEventListener("change", sortitems);

function sortitems() {
    // console.log("sort")
    if (sorter.value == "sort") {

      window.location.href="../shop.html"
        display(productdata);
    } 
    else if (sorter.value == "htl") {
        productdata.sort(function(a, b) {
            return b.price - a.price;
        });
        display(productdata);
    } 
    else if (sorter.value == "lth") {
        productdata.sort(function(a, b) {
            return a.price - b.price;
        });
        display(productdata);
    }
}

var searchbar = document.getElementById("search_bar_of_products");
searchbar.addEventListener("keyup", search);

function search() {
    console.log(searchbar.value);
    var filtermendata = productdata.filter(function(elem) {
        return elem.name.includes(searchbar.value);
    });
    display(filtermendata);
}

var sorterbrand = document.querySelector("#brandfilter");
sorterbrand.addEventListener("change", sortitemsbybrand);

function sortitemsbybrand() {
    // console.log(searchbar.value);
    var filtermendata = productdata.filter(function(elem) {
        return elem.name.includes(sorterbrand.value);
    });
    
    display(filtermendata);
}

