const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let cartFromLocalStorage = (localStorage.getItem('cart') || '0.00')
if (cartFromLocalStorage == '[]') {
  localStorage.setItem('cart', 0)
}

//click on nav bar hamburger event listener
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

//nav bar event to activate menu or hamburger
document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }))

//shopping cart value total displayed right side of nav bar logic to add total
const shoppingCartValue = document.querySelector(".shop-cart");
shoppingCartValue.innerHTML = `🛒 $${cartFromLocalStorage}`