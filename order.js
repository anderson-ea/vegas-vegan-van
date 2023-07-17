const pageContent = document.querySelector('.orderList')
const total = localStorage.getItem('cart')

let cartList = localStorage.getItem('cartList') || []
const clearOrder = () => {
  localStorage.setItem('cart', 0.00)
  localStorage.setItem('cartList', [])
  location.reload()
}

let printList = cartList.replace(/[\[\]"]/g, '')
let realPrintList = printList.replace(/,/g, ", ")

pageContent.innerHTML = `
  <div class="flex column" style="align-items: center; justify-content: space-between; height: 20vh; line-height: 3rem; text-align: center; justify-content: center; padding-top: 20px;">
    Your order total comes out to $${total}
    </br>Items Ordered: ${realPrintList}
    <button class="orderButton" style="width: 200px; margin: 20px;" onclick="clearOrder()">Cancel Order</button>
  </div>
`