const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const shoppingCartValue = document.querySelector("shop-cart")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }))

// store each menu item in JSON and pull cost from there
// use javascript to display cost of menu item
// js to click on button and retreive price
// cost will be simple loop through a list of all costs added to list