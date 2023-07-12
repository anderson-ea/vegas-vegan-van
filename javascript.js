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


fetch('menu.JSON')
  .then(response => response.json())
  .then(data => {
    var container = document.getElementById('inject-menu1');
    container.innerHTML = `
      <h3 class="food-title">BURGERS</h3>
      <div class="flex foods">
        <div class="flex foods-border">
          <div class="flex column food-container">
            <h4 class="food-name">${data.burgers[0].name}</h4>
            <p class="flex food"></br>${data.burgers[0].ingredients}</p>
            <p class="price">$${data.burgers[0].price}</p>
          </div>
        <img src="${data.burgers[0].img}" alt="vvv burger" style="padding: 20px;width: 100px; height: 100px">
      </div>
    `;  
  })
  .catch(error => {
    console.error('Error:', error);
  });