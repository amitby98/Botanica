let cartItems = []; // Array to store cart items
let totalAmount = 0; // Total price of cart items

function createCartItem(name, price, imageSrc, description) {
  const formattedName = name.replace(/\s+/g, '-');
  const cartItemHtml = `
    <div class="cart-item" id="${formattedName}">
      <img class="cart-item-img" src="${imageSrc}" alt="${name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-desc">${description}</div>
      </div>
      <div class="cart-item-price">
        <div class="price" id="${formattedName}-total">$${(price * 1).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="btn btn-danger btn-sm trash-icon" onclick="removeCartItem('${formattedName}')">
          <i class="fas fa-trash"></i>
        </button>
        <div class="quantity-control">
          <button class="btn btn-secondary btn-sm minus-btn" onclick="decrementQuantity('${formattedName}')">-</button>
          <span class="quantity-label">1</span>
          <button class="btn btn-secondary btn-sm plus-btn" onclick="incrementQuantity('${formattedName}')">+</button>
        </div>
      </div>
    </div>
  `;

  const cartContainer = document.querySelector('.cart-items-container');
  cartContainer.insertAdjacentHTML('beforeend', cartItemHtml);

  // Update cartItems array and totalAmount
  cartItems.push({ name: formattedName, unitPrice: price, quantity: 1 });
  totalAmount += price;
  updateTotalPrice();
}
function updateTotalPrice() {
  const totalPriceElement = document.querySelector('.total-price');
  if (totalAmount === 0) {
    totalPriceElement.textContent = 'Your cart is empty. Please fill it.';
  } else {
    totalPriceElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
  }
}
// Remove cart item by name
function removeCartItem(name) {
  const cartItem = document.querySelector(`#${name}`);
  if (cartItem) {
    cartItem.remove();

    // Update cartItems array and totalAmount
    const removedItem = cartItems.find(item => item.name.replace(/\s+/g, '-') === name);
    if (removedItem) {
      totalAmount -= removedItem.unitPrice * removedItem.quantity;
      updateTotalPrice();
      cartItems = cartItems.filter(item => item.name.replace(/\s+/g, '-') !== name);
    }
  }
}

// Increment quantity for a cart item
function incrementQuantity(name) {
  const cartItem = cartItems.find(item => item.name.replace(/\s+/g, '-') === name);
  if (cartItem) {
    cartItem.quantity += 1;
    cartItem.price = cartItem.quantity * cartItem.unitPrice;
    totalAmount += cartItem.unitPrice; // Increment the totalAmount by the unitPrice
    updateTotalPrice();
    const quantityLabel = document.querySelector(`#${name} .quantity-label`);
    const totalPriceLabel = document.querySelector(`#${name}-total`);
    quantityLabel.textContent = cartItem.quantity;
    totalPriceLabel.textContent = `$${cartItem.price.toFixed(2)}`;
  }
}

function decrementQuantity(name) {
  const cartItem = cartItems.find(item => item.name.replace(/\s+/g, '-') === name);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    cartItem.price = cartItem.quantity * cartItem.unitPrice;
    totalAmount -= cartItem.unitPrice; // Decrement the totalAmount by the unitPrice
    updateTotalPrice();
    const quantityLabel = document.querySelector(`#${name} .quantity-label`);
    const totalPriceLabel = document.querySelector(`#${name}-total`);
    quantityLabel.textContent = cartItem.quantity;
    totalPriceLabel.textContent = `$${cartItem.price.toFixed(2)}`;
  }
}
function adjustAlignment() {
  const cartItems = document.querySelectorAll('.cart-item');
  cartItems.forEach(cartItem => {
    const quantityControl = cartItem.querySelector('.quantity-control');
    const totalPriceLabel = cartItem.querySelector('.total-price');
    
    // Calculate the difference in width between the quantity control and total price label
    const widthDifference = totalPriceLabel.offsetWidth - quantityControl.offsetWidth;
    
    // Apply margin to adjust alignment
    if (widthDifference > 0) {
      quantityControl.style.marginRight = `${widthDifference}px`;
    } else {
      totalPriceLabel.style.marginRight = `${-widthDifference}px`;
    }
  });
}

// Call createCartItem function to add new items to the cart
createCartItem('Succulent Delight', 12.00, 'item2.jpg', 'A small succulent to brighten your space');
createCartItem('tree',1.00,'data:image/jpeg;base64,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','cool tree')
adjustAlignment();
// Call updateTotalPrice function after all cart items have been added
updateTotalPrice();