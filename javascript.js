const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const shoppingCartValue = document.querySelector("shop-cart")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

//from stack overflow.. function to show visibility. learning JS...
function klikaj(i) {
  document.getElementById(i).style.visibility='visible';
}

// store each menu item in JSON and pull cost from there
// use javascript to display cost of menu item
// js to click on button and retreive price
// cost will be simple loop through a list of all costs added to list