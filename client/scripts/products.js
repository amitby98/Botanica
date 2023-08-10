function renderProducts(products) {
  $("#products").html("");
  for (const product of products) {
    $("#products").append(` 
    <div class="row">
    <div class="mb-3">
      <div class="product-box">
        <div class="product-inner-box position-relative">
          <div class="icons position-absolute">
            <a href="#" class="text-decoration-none text-dark"><i class="fas fa-shopping-cart"></i></a>
          </div>

          <img src="${product.imageUrl}" alt="Plant1" class="img-fluid img-thumbnail" />
        </div>

        <div class="product-info">
          <div class="product-name">
            <h2>${product.name}</h2>
          </div>
          <div class="product-category">
            <h3>${product.category}</h3>
          </div>
          <div class="product-price">$<span>${product.price}</span></div>
        </div>
      </div>
    </div>
  </div>
  `);
  }

  let cards = document.querySelectorAll(".product-box");
  [...cards].forEach(card => {
    card.addEventListener("mouseover", function () {
      card.classList.add("is-hover");
    });
    card.addEventListener("mouseleave", function () {
      card.classList.remove("is-hover");
    });
  });
}

$.ajax({
  url: "api/products",
  method: "GET",
  success: data => {
    console.log(data);
    renderProducts(data.products);
  },
});

/////Search
// $("button").on("click", () => {
//   const searchValue = $("input#search").val();

//   $.ajax({
//     url: "api/products/search",
//     method: "POST",
//     data: JSON.stringify({ searchValue }),
//     contentType: "application/json",
//     dataType: "json",
//     success: data => {
//       renderProducts(data.products);
//     },
//   });
// });
