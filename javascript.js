const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let cartFromLocalStorage = (localStorage.getItem('cart') || '[]')
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
const addToTotal = (totalCart, addedAmount) => {
  totalCart += addedAmount
  localStorage.setItem('cart', totalCart)
  shoppingCartValue.innerHTML = `🛒 $${totalCart}`
  modal.classList.toggle('active');
}

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
        let seeCart = localStorage.getItem('cart')
        modal.classList.toggle('active')
        const parent = document.getElementById(e.currentTarget.id)
        const foodName = parent.querySelector('.food-name').innerText
        const foodPrice = parent.querySelector('.price').innerText
        const foodIng = parent.querySelector('.food').innerText
        const foodImg = parent.querySelector('img').getAttribute('src')
        const parsedPrice = parseFloat(foodPrice.replace(/\$|,/g, ''))
        // console.log(foodPrice)
        // console.log(parsedPrice)
        innerModal.innerHTML = `
            <div class="flex column modal">
              <h4 class="food-name food-modal">${foodName}</h4>
              <p class="flex food-modal"></br>${foodIng}</p>
              <p class="">${foodPrice}</p>
              <img src="${foodImg}" alt="${foodName}" style="width: 300px; height: 300px">
              <button class="" onclick="addToTotal(${seeCart}, ${parsedPrice})">Add to Order</button>
            </div>
        `;
      }))
    
  })  
  .catch(error => {
    console.error('Error:', error);
  });

//click on outside of menu page modal to close
const modal = document.querySelector('.menu-modal');
modal.addEventListener("click", (event) => {
  const isOutside = !event.target.closest('.modal-container');
  if (isOutside) {
    modal.classList.toggle('active');
  }
})
