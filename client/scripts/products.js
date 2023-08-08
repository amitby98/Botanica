function renderProducts(products) {
  $("#products").html("");
  for (const product of products) {
    $("#products").html(
      $("#products").html() +
        `  <div>
        <p>${product.name}</p>
        <p>${product.category}</p>
        <p>${product.price}</p>
        <img src=${product.imageUrl} ></img>
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
