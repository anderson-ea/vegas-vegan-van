const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const shoppingCartValue = document.querySelector("shop-cart");


//nav bar hamburger to X logic
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }))

//generates menu items with corresponding data
fetch('menu.JSON')
  .then(response => response.json())
  .then(data => {
    const generateMenuItems = (items, containerId) => {
      var container = document.getElementById(containerId);    
      items.forEach(item => {
        var listItem = document.createElement("div");
        listItem.innerHTML = `
          <div class="flex foods-border">
            <div class="flex column food-container">
              <h4 class="food-name">${item.name}</h4>
              <p class="flex food"></br>${item.ingredients}</p>
              <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <img src="${item.img}" alt="${item.name}" style="padding: 20px;width: 100px; height: 100px">
          </div>
        `;
        container.appendChild(listItem);
      });
    }

    // Generate burgers section
    generateMenuItems(data.burgers, "burgers");

    // Generate sandwiches section
    generateMenuItems(data.sandwiches, "sandwiches");

    // Generate sides section
    generateMenuItems(data.sides, "sides");

    // Activates Modal when clicking on menu item
    const modal = document.querySelector(".menu-modal")

    document.querySelectorAll(".foods-border").forEach(n => 
      n.addEventListener("click", (e) => {
        console.log("hello")
        modal.classList.toggle('active');
      }))
    
  })  
  .catch(error => {
    console.error('Error:', error);
  });

const modal = document.querySelector('.menu-modal')
modal.addEventListener("click", () => {
  modal.classList.toggle('active');
})