document.addEventListener("DOMContentLoaded", function () {
    // Function to update the total price in the cart
    function updateTotalPrice() {
      const itemPrices = document.querySelectorAll(".item-price");
      let totalPrice = 0;
  
      // Calculate the total price by summing up the prices of all items
      itemPrices.forEach(function (price) {
        totalPrice += parseFloat(price.innerText.substring(1)); // Convert price text to number
      });
  
      // Update the total price in the cart
      const totalPriceElement = document.querySelector(".cart-details li:last-child");
      totalPriceElement.innerText = "Total: $" + totalPrice.toFixed(2);
    }
  });
 