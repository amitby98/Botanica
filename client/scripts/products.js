function renderProducts(products) {
  $("#products").html("");
  for (const product of products) {
    $("#products").html(
      $("#products").html() +
        ` <div class="product1">
        <div class="product-card">
          <button class="add-to-cart-button"><i class="fa-solid fa-bag-shopping"></i></button>
          <img src=${product.imageUrl} alt="Plant1" class="product-image"> 
        </div>
        <div>
          <h3>${product.name}</h3>
          <h3>${product.category}</h3>
          <h3>$${product.price}</h3>
        </div>
          </div>`
    );
  }
}

$.ajax({
  url: "api/products",
  method: "GET",
  success: data => {
    console.log(data);
    renderProducts(data.products);
  },
});

$("button").on("click", () => {
  const searchValue = $("input#search").val();

  $.ajax({
    url: "api/products/search",
    method: "POST",
    data: JSON.stringify({ searchValue }),
    contentType: "application/json",
    dataType: "json",
    success: data => {
      renderProducts(data.products);
    },
  });
});
