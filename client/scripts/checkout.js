// JavaScript code for dynamic cart and buttons
const shoppingCart = document.getElementById('shoppingCart');
const cartItemCount = document.getElementById('cartItemCount');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');
const checkoutTotal = document.getElementById('checkoutTotal');

let itemsInCart = 0;
let cartTotal = 0;

function updateCart() {
  cartItemCount.querySelector('span').textContent = itemsInCart;
  subtotal.textContent = `$${cartTotal.toFixed(2)}`;
  total.textContent = `$${(cartTotal + 20).toFixed(2)}`;
  checkoutTotal.textContent = `$${(cartTotal + 20).toFixed(2)}`;
}
function createCartItem(name, price, description, imageUrl) {
  const cartItem = document.createElement('div');
  cartItem.className = 'card mb-3';
  cartItem.innerHTML = `
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <img src="${imageUrl}" class="img-fluid rounded-circle" style="width: 45px" alt="Item Image" />
          <div class="ms-3">
            <h5>${name}</h5>
            <p class="small mb-0">${description}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <button class="btn btn-sm btn-outline-secondary" onclick="decrementCartItem('${name}', ${price})">-</button>
          <div style="width: 50px">
            <h5 class="fw-normal mb-0" id="${name}Quantity">1</h5>
          </div>
          <button class="btn btn-sm btn-outline-secondary" onclick="incrementCartItem('${name}', ${price})">+</button>
          <div style="width: 80px">
            <h5 class="mb-0" id="${name}Price">$${price.toFixed(2)}</h5>
          </div>
          <a href="#!" style="color: #cecece; margin-left: 10px;" onclick="removeCartItem('${name}', ${price})">
            <i class="fas fa-trash-alt" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  shoppingCart.appendChild(cartItem);
  itemsInCart++;
  cartTotal += price;
  updateCart();
}



function incrementCartItem(name, price) {
  cartTotal += price;
  const quantityElement = document.getElementById(`${name}Quantity`);
  const priceElement = document.getElementById(`${name}Price`);
  quantityElement.textContent = (parseInt(quantityElement.textContent) + 1).toString();
  priceElement.textContent = `$${(parseFloat(priceElement.textContent.substring(1)) + price).toFixed(2)}`;
  updateCart();
}

function decrementCartItem(name, price) {
  if (itemsInCart > 0) {
    cartTotal -= price;
    const quantityElement = document.getElementById(`${name}Quantity`);
    const priceElement = document.getElementById(`${name}Price`);
    const quantity = parseInt(quantityElement.textContent);
    if (quantity === 1) {
      shoppingCart.removeChild(quantityElement.parentElement.parentElement.parentElement);
      itemsInCart--;
    } else {
      quantityElement.textContent = (quantity - 1).toString();
      priceElement.textContent = `$${(parseFloat(priceElement.textContent.substring(1)) - price).toFixed(2)}`;
    }
    updateCart();
  }
}

function removeCartItem(name, price) {
  const item = document.getElementById(`${name}Price`).parentElement.parentElement.parentElement;
  cartTotal -= price * parseInt(item.querySelector(`#${name}Quantity`).textContent);
  shoppingCart.removeChild(item);
  itemsInCart--;
  updateCart();
}

// Example items
createCartItem('Iphone 11 pro', 900);
createCartItem('Samsung galaxy Note 10', 900);
createCartItem('Canon EOS M50', 1199);
createCartItem('MacBook Pro', 1799);
