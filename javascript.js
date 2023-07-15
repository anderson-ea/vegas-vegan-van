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
    const generateMenuItems = (items, containerId, id) => {
      var container = document.getElementById(containerId);    
      items.forEach(item => {
        var listItem = document.createElement("div");
        listItem.innerHTML = `
          <div id="${containerId + id}" class="flex foods-border">
            <div class="flex column food-container">
              <h4 class="food-name">${item.name}</h4>
              <p class="flex food"></br>${item.ingredients}</p>
              <p class="price">$${item.price.toFixed(2)}</p>
            </div>
            <img src="${item.img}" alt="${item.name}" style="padding: 20px;width: 100px; height: 100px">
          </div>
        `;
        container.appendChild(listItem);
        id += 1
      });
    }

    // Generate burgers section
    generateMenuItems(data.burgers, "burgers", 1);

    // Generate sandwiches section
    generateMenuItems(data.sandwiches, "sandwiches", 1);

    // Generate sides section
    generateMenuItems(data.sides, "sides", 1);

    // Activates Modal when clicking on menu item
    const modal = document.querySelector(".menu-modal")
    const innerModal = document.querySelector(".modal-container")
    // const food 
    document.querySelectorAll(".foods-border").forEach(n => 
      n.addEventListener("click", (e) => {
        modal.classList.toggle('active')
        const parent = document.getElementById(e.currentTarget.id)
        const foodName = parent.querySelector('.food-name').innerText
        const foodPrice = parent.querySelector('.price').innerText
        const foodIng = parent.querySelector('.food').innerText
        const foodImg = parent.querySelector('img').getAttribute('src')
        innerModal.innerHTML = `
          <div class="flex">
            <div class="flex column">
              <h4 class="">${foodName}</h4>
              <p class="flex"></br>${foodIng}</p>
              <p class="">${foodPrice}</p>
            </div>
            <img src="${foodImg}" alt="${foodName}" style="padding: 20px;width: 200px; height: 200px">
          </div>
        `;
      }))
    
  })  
  .catch(error => {
    console.error('Error:', error);
  });

const modal = document.querySelector('.menu-modal')
modal.addEventListener("click", () => {
  modal.classList.toggle('active');
})