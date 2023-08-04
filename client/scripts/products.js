function renderProducts(products) {
  $("#products").html("");
  for (const product of products) {
    $("#products").html(
      $("#products").html() +
        `
              <div>${product.name}</div>
            `
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
