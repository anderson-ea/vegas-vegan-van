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
  const wholeMenu = document.createElement('template');

  for (let n = 0; n < 3; n++) {
    let type = Object.keys(menu.menuItems)[n];
    wholeMenu.innerHTML = `
      <div class="flex column c1">
        <h3 class="food-title">${type}</h3>
        <div id="menuItems${n}" class="flex foods"></div>
      </div>
    `;

    document.getElementById('actualMenu').appendChild(wholeMenu.content);

    for (let i = 0; i < 4; i++) {
      menuItem.innerHTML = `
        <div class="flex foods-border" onclick="showModal()">
          <div class="flex column food-container">
            <h4 class="food-name">${menu.menuItems[type][i].name}</h4>
            <p class="flex food"></br>${menu.menuItems[type][i].ingredients}</p>
            <p class="price">${menu.menuItems[type][i].price}</p>
          </div>
          <img src="${menu.menuItems[type][i].img}" alt="${menu.menuItems[type][i].name}" style="padding: 20px;width: 100px; height: 100px">
        </div>  
      `;
    
      document.getElementById(`menuItems${n}`).appendChild(menuItem.content);
    }
  }
}

grabData();






// store each menu item in JSON and pull cost from there
// use javascript to display cost of menu item
// js to click on button and retreive price
// cost will be simple loop through a list of all costs added to list