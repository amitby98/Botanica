let renderedProducts = [];
function renderProducts(products) {
  renderedProducts = products;
  $("#products").html("");
  for (const product of products) {
    $("#products").append(` 
    <div class="row">
    <div class="mb-3">
      <div id="${product._id}" class="product-box">
        <div class="product-inner-box position-relative">
          <div class="cart-icon icons position-absolute">
            <a class="text-decoration-none text-dark"><i class="fas fa-shopping-cart"></i></a>
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

  $("body")
    .find(".cart-icon")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".product-box");
        const productId = box.id;
        console.log(productId);
        const selectedProduct = renderedProducts.find(p => p._id === productId);
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex(p => p._id === productId);
        if (index > -1) {
          cart[index].quantity += 1;
        } else {
          cart.push({ ...selectedProduct, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });

  ///////////Cart Counter Function
  $(document).ready(function () {
    let counts = 0;
    $(".cart-icon").click(function () {
      updateCartQuantity();
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

$("#search-form").on("submit", function (e) {
  e.preventDefault();
  const searchValue = $("#search-input").val();
  const category = $("#category").val();
  const size = $("#size").val();
  const light = $("#light").val();

  $.ajax({
    url: "api/products/search",
    method: "POST",
    data: JSON.stringify({ searchValue, category, size, light }),
    contentType: "application/json",
    dataType: "json",
    success: data => {
      renderProducts(data.products);
    },
  });
});
