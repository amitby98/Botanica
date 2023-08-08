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
          <div style="width: 80px">
            <h5 class="mb-0" id="${name}Price">$${price.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  `;

  shoppingCart.appendChild(cartItem);
  itemsInCart++;
  cartTotal += price;
  updateCart();
}

// Example items
createCartItem(
  'Iphone 11 pro',
  900,
  'High-end smartphone with advanced features.',
  'https://example.com/iphone.jpg'
);
createCartItem(
  'Samsung galaxy Note 10',
  900,
  'Premium Android smartphone with stylus.',
  'https://example.com/samsung-galaxy.jpg'
);
createCartItem(
  'Canon EOS M50',
  1199,
  'Mirrorless camera for photography enthusiasts.',
  'https://example.com/canon-camera.jpg'
);
createCartItem(
  'MacBook Pro',
  1799,
  'Powerful laptop for creative professionals.',
  'https://example.com/macbook.jpg'
);
