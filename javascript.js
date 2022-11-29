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

function showModal(i) {
  document.getElementById(i).style.visibility='visible';
}

async function grabData() {
  const res = await fetch('/menu.json');
  const menu = await res.json();
}

grabData();

const menuItem = document.createElement('template');
menuItem.innerHTML = `
  <div class="flex foods-border">
    <div class="flex column food-container">
      <h4 class="food-name">VVV Burger</h4>
      <p class="flex food"></br>hawaiian bbq sauce, hash brown, white onion, sliced cheese, grilled pineapple</p>
      <p class="price">$12.99</p>
    </div>
    <img src="images/b1.jpg" alt="vvv burger" style="padding: 20px;width: 100px; height: 100px">
  </div>  
`;

document.getElementById('menuItems').appendChild(menuItem.content);




// store each menu item in JSON and pull cost from there
// use javascript to display cost of menu item
// js to click on button and retreive price
// cost will be simple loop through a list of all costs added to list