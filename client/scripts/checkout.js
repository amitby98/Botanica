$(document).ready(function () {
  $(".increase-quantity").on("click", function () {
    const quantityElement = $(this).siblings("h5");
    let quantity = parseInt(quantityElement.text());
    quantity++;
    quantityElement.text(quantity);
    updateTotal();
  });

  $(".decrease-quantity").on("click", function () {
    const quantityElement = $(this).siblings("h5");
    let quantity = parseInt(quantityElement.text());
    if (quantity > 1) {
      quantity--;
      quantityElement.text(quantity);
      updateTotal();
    }
  });

  $(".remove-item").on("click", function () {
    const listItem = $(this).closest(".d-flex.justify-content-between");
    listItem.remove();
    updateTotal();
  });
  function updateTotal() {
    let total = 0;

    $(".d-flex.justify-content-between").each(function () {
      const quantity = parseInt($(this).find("h5").text());
      const price = parseInt($(this).find(".mb-0").last().text().replace("$", ""));
      const itemTotal = quantity * price;
      total += itemTotal;
    });

    $("#total-amount").text("$" + total.toFixed(2));
  }
});
