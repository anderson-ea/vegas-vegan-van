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
  const menuItem = document.createElement('template');
  for (let i = 0; i < 5; i++) {
    menuItem.innerHTML = `
      <div class="flex foods-border">
        <div class="flex column food-container">
          <h4 class="food-name">${menu.menuItems.BURGERS[i].name}</h4>
          <p class="flex food"></br>${menu.menuItems.BURGERS[i].ingredients}</p>
          <p class="price">${menu.menuItems.BURGERS[i].price}</p>
        </div>
        <img src="${menu.menuItems.BURGERS[i].img}" alt="${menu.menuItems.BURGERS[i].name}" style="padding: 20px;width: 100px; height: 100px">
      </div>  
    `;
  
    document.getElementById('menuItems').appendChild(menuItem.content);
  }
}

grabData();






// store each menu item in JSON and pull cost from there
// use javascript to display cost of menu item
// js to click on button and retreive price
// cost will be simple loop through a list of all costs added to list