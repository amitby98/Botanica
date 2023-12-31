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
        ${
          isAdmin
            ? `<div class="trash-icon icons position-absolute">
            <a class="text-decoration-none text-dark"><i class="fas fa-trash"></i></a>
          </div>
          <div class="pen-icon icons position-absolute" style="right: 60px">
          <a class="text-decoration-none text-dark"><i class="fas fa-pen"></i></a>
        </div>`
            : `<div class="cart-icon icons position-absolute">
          <a class="text-decoration-none text-dark"><i class="fas fa-shopping-cart"></i></a>
        </div>`
        }

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

  $("body")
    .find(".trash-icon")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".product-box");
        const productId = box.id;
        console.log(productId);
        $.ajax({
          url: `api/products/${productId}`,
          method: "DELETE",
          success: data => {
            alert("Product Deleted");
            window.location.reload();
          },
          error: error => {
            alert("Error");
          },
        });
      });
    });

  $("body")
    .find(".pen-icon")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".product-box");
        const productId = box.id;
        const name = prompt("Enter new name");
        console.log("name", name);
        $.ajax({
          url: `api/products/${productId}`,
          method: "PUT",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({ name }),
          success: data => {
            console.log("data", data);
            alert("Product updated");
            window.location.reload();
          },
          error: error => {
            alert("Error");
          },
        });
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
    const outdoorCount = data.categoryCount.find(c => c._id === "Outdoor");
    const indoorCount = data.categoryCount.find(c => c._id === "Indoor");
    $("#indoorCount").text(`Indoor [${indoorCount.count}]`);
    $("#outdoorCount").text(`Outdoor [${outdoorCount.count}]`);
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

{
  const addBtn = `${isAdmin ? `<div class="d-flex justify-content-center my-4"><button id="add-new-product" class="btn btn-primary" style="background-color: #559c73; border:none;">Add Product</button></div>` : ""}`;
  const container = document.getElementById("products-header");
  container.insertAdjacentHTML("afterend", addBtn);
  document.getElementById("add-new-product").addEventListener("click", () => {
    window.location.href = "/add-product.html";
  });
}
