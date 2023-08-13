const adminData = JSON.parse(localStorage.getItem("user"));
const isAdmin = adminData?.role === "admin";
const currentPage = window.location.pathname.slice(1);
const userData2 = JSON.parse(localStorage.getItem("user"));
const userName1 = userData2 ? userData2.username.charAt(0).toUpperCase() + userData2.username.slice(1) : "";

function updateCartQuantity() {
  const cart = getCart();
  let totalQuantity = 0;
  for (const cartItem of cart) {
    totalQuantity += cartItem.quantity;
  }

  $(".cart-counter").animate(
    {
      opacity: 1,
    },
    300,
    function () {
      $(this).text(totalQuantity);
    }
  );
}

function addNavbar() {
  const isLoggedIn = localStorage.getItem("user");
  const checkoutHtml = `<div id='checkout-card' class="card bg-primary text-white rounded-3" style='display: none'>
  <div class="card-body">
    <div class="d-flex justify-content-center align-items-center mb-6">
      <h5 class="mb-6">Card details</h5>
    </div>

    <p class="d-flex justify-content-center">
      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-mastercard fa-2x me-2"></i></a>
      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-visa fa-2x me-2"></i></a>
      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-amex fa-2x me-2"></i></a>
      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
    </p>

    <!-- Card details form -->
    <form class="mt-4">
      <div class="form-outline form-white mb-4">
        <input type="text" id="typeName" class="form-control form-control-lg" siez="17" placeholder="Cardholder's Name" />
        <label class="form-label" for="typeName">Cardholder's Name</label>
      </div>

      <div class="form-outline form-white mb-4">
        <input type="text" id="card-type" class="form-control form-control-lg" siez="17" placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
        <label class="form-label" for="card-type">Card Number</label>
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <div class="form-outline form-white">
            <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7" />
            <label class="form-label" for="typeExp">Expiration</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-outline form-white">
            <input type="password" id="typeText" class="form-control form-control-lg" placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
            <label class="form-label" for="typeText">Cvv</label>
          </div>
        </div>
      </div>
      <hr class="my-4" />
    </form>

    <div class="d-flex justify-content-between">
      <p class="mb-2">Subtotal</p>
      <p class="mb-2" id='checkout-total'>0$</p>
    </div>

    <div class="d-flex justify-content-between">
      <p class="mb-2">Shipping</p>
      <p class="mb-2">$20.00</p>
    </div>

    <div class="d-flex justify-content-between mb-4">
      <p class="mb-2">Total(Incl. taxes)</p>
      <p class="mb-2" id='total-with-shipping'>0$</p>
    </div>

    <button id='confirm-order' type="button" class="btn btn-info btn-block btn-lg">
      <div class="d-flex justify-content-between">
        <span>Checkout <i class="fa-regular fa-credit-card"></i></span>
      </div>
    </button>
  </div>
</div>`;
  const navbarHtml = `
  <nav class="navbar navbar-expand-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Botanica</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item mx-2">
          <a class="nav-link ${currentPage === "" ? "selected" : ""}" href="/">Home</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link ${currentPage === "products.html" ? "selected" : ""}" href="./products.html">Products</a>
        </li>
        ${
          !isAdmin
            ? `<li class="nav-item mx-2">
        <a class="nav-link ${currentPage === " contact.html" ? "selected" : ""}" href="./contact.html">Contact</a>
        </li >`
            : ""
        }
      </ul>
      <ul class="navbar-nav me-right">
        <li class="nav-item mx-2">
          <a class='nav-link' style="color: black; background-color: transparent;">
            <i class="fa-solid fa-users"></i>
            <span id='userCount'>1</span>
          </a>
        </li>
        ${
          !isAdmin
            ? ` <li id='cart-nav-link' class="nav-item mx-2">
        <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
          <i class="cartIconTop
          fa-solid fa-cart-shopping"></i><span class='cart-counter'></span>
        </a>
      </li>`
            : ""
        }
       
        <li class="nav-item mx-2">
          <a id="login-overlay" class="nav-link" data-bs-toggle="modal" href="#loginModal" role="button" aria-controls="loginModal"><i class="fa-solid fa-user"></i></a>
          ${
            isLoggedIn
              ? ` <div class="dropdown dropstart profile-link">
            <a class="nav-link ${currentPage === "profile.html" ? "selected" : ""}"  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-user"></i></a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><h6 class="dropdown-header">Hello, ${userName1}!</h6></li>
              <li><a class="dropdown-item" href="./profile.html">Profile</a></li>
              <div class="dropdown-divider"></div>
              <li><a class="dropdown-item" id='logout'><i class="fa-solid fa-right-from-bracket fa-fade" style="color: #000000;font-size: medium;"></i>&nbsp; Log out </a></li>`
              : ""
          }
              </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Shopping Cart</h5>
        <div class="row justify-content-evenly" id="cart-filter-container">
            <div class="col-sm-4 col-xs-6">
              <select id="cart-category">
                <option value="">Category</option>
                <option value="indoor">Indoor<span id="indoorCount"></span></option>
                <option value="outdoor">Outdoor<span id="outdoorCount"></span></option>
              </select>
            </div>
            <div class="col-sm-4 col-xs-6">
            <select id="cart-quantity">
                <option value="">Quantity</option>
                <option value="underQuan">Under 5</option>
                <option value="betweenQuan">5 to 10</option>
                <option value="overQuan">Over 10</option>
              </select>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div id="cart-items" class="justify-content-between">
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-2 cartTotal">Subtotal</p>
          <p class="mb-2 cartTotal" id="total-amount">$</p>
        </div>
        <button id="checkout-cart" href="#" role="button">Proceed to checkout</button>
        ${checkoutHtml}
      </div>
    </div>
<div id="loginModal" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <button data-bs-dismiss="modal" class="btn-close"></button>
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <form class="register-form">
              <h1>Create Account</h1>
              <input id="register-username" type="text" placeholder="Username" />
              <input id="register-password" type="password" placeholder="Password" />
              <select name="role" id="role" required>
                <option value="" disabled selected>Select an option</option>
                <option value="buyer">Buyer</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit" class="buttons">Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form class="login-form">
              <h1>Sign in</h1>
              <input id="login-username" type="text" placeholder="Username" />
              <input id="login-password" type="password" placeholder="Password" />
              <a id="forgot-password" href="#">Forgot your password?</a>
              <button type="submit" class="buttons">Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button class="ghost buttons" id="signIn">Sign In</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost buttons" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  document.body.insertAdjacentHTML("afterbegin", navbarHtml);
  $("#cart-nav-link").click(renderCartItems);
  $("#checkout-cart").click(() => {
    $("#checkout-card").attr("style", "display: initial");
    $("#checkout-cart").attr("style", "display: none");
    $(".cartTotal").attr("style", "display: none");
  });

  $("#confirm-order").click(async () => {
    const { _id } = JSON.parse(localStorage.getItem("user") || "{}");
    if (!_id) {
      return alert("Please login to complete you purchase");
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) {
      return alert("Please add items to your cart");
    }
    let total = 0;

    for (const cartItem of cart) {
      total += cartItem.price * cartItem.quantity;
    }

    $.ajax({
      url: "api/orders",
      method: "POST",
      data: JSON.stringify({ total, cart, userId: _id }),
      contentType: "application/json",
      dataType: "json",
      success: data => {
        alert("Order placed succesfully");
        localStorage.removeItem("cart");
        window.location.href = "/profile.html";
      },
    });
  });

  $("#logout").click(() => {
    localStorage.removeItem("user");
    window.location.href = "/";
  });
}

function renderCartItems() {
  const cart = getCart();
  $("#cart-items").html("");
  let total = 0;

  for (const cartItem of cart) {
    total += cartItem.price * cartItem.quantity;
    const itemHtml = `<div id="${cartItem._id}" class="item d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
                <div>
                  <img src="${cartItem.imageUrl}" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px" />
                </div>
                <div class="ms-3">
                  <h5>${cartItem.name}</h5>
                  <p class="small mb-0">${cartItem.category}</p>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center" id="options">
                <div id="amount-div">
                  <button class="btn btn-secondary btn-sm increase-quantity"><i class="fa-solid fa-circle-plus"></i></button>
                  <h5 class="fw-normal">${cartItem.quantity}</h5>
                  <button class="btn btn-secondary btn-sm decrease-quantity"><i class="fa-solid fa-circle-minus"></i></button>
                </div>
                <h5 class="mb-0">$${cartItem.price}</h5>
                <button class="btn btn-danger btn-sm remove-item"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>`;

    $("#cart-items").append(itemHtml);
  }
  $("#total-amount").html(total + "$");
  $("#checkout-total").html(total + "$");
  $("#total-with-shipping").html(total + 20 + "$");

  $("body")
    .find("#cart-items .increase-quantity")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".item");
        const productId = box.id;
        const index = cart.findIndex(p => p._id === productId);
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
        updateCartQuantity();
      });
    });

  $("body")
    .find("#cart-items .decrease-quantity")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".item");
        const productId = box.id;
        const index = cart.findIndex(p => p._id === productId);
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
        updateCartQuantity();
      });
    });

  $("body")
    .find("#cart-items .remove-item")
    .each((index, element) => {
      $(element).on("click", () => {
        const box = element.closest(".item");
        const productId = box.id;
        const updatedCart = cart.filter(p => p._id !== productId);
        console.log({ updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        renderCartItems();
        updateCartQuantity();
      });
    });
}

function getCart() {
  const fullCart = JSON.parse(localStorage.getItem("cart") || "[]");

  const quantityFilter = $("#cart-quantity").val();
  const categoryFilter = $("#cart-category").val();

  const filteredCart = fullCart.filter(cartItem => {
    let isShown = true;
    if (quantityFilter) {
      if (quantityFilter === "underQuan" && cartItem.quantity > 5) {
        isShown = false;
      } else if (quantityFilter === "betweenQuan" && (cartItem.quantity <= 5 || cartItem.quantity > 10)) {
        isShown = false;
      } else if (quantityFilter === "overQuan" && cartItem.quantity < 10) {
        isShown = false;
      }
    }

    console.log(categoryFilter);
    if (categoryFilter) {
      if (categoryFilter === "indoor" && cartItem.category.toLowerCase() === "outdoor") {
        isShown = false;
      } else if (categoryFilter === "outdoor" && cartItem.category.toLowerCase() === "indoor") {
        isShown = false;
      }
    }
    return isShown;
  });
  return filteredCart;
}

function addFooter() {
  const footerHtml = `
  <footer class="text-center text-lg-start text-white">
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Botanica</h6>
              <p>Explore Botanica, your ultimate destination for a diverse array of plants and gardening essentials. Find your perfect green companion and create a blooming sanctuary of nature at home.</p>
            </div>
            <hr class="w-100 clearfix d-md-none" />
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a class="text-white">Your Account</a>
              </p>
              <p>
                <a class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a class="text-white">Help</a>
              </p>
            </div>
            <hr class="w-100 clearfix d-md-none" />
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i class="fas fa-home mr-3"></i> Tel Aviv, Israel</p>
              <p><i class="fas fa-envelope mr-3"></i> contact@botanica.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 972-521-1348</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </section>
        <hr class="my-3" />
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <div class="p-3">
                © 2023 Copyright:
                <a class="text-white" href="/">Botanica.com</a>
              </div>
            </div>
            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i class="fab fa-google"></i></a>
              <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </section>
      </div>
    </footer>
`;

  document.body.insertAdjacentHTML("beforeend", footerHtml);
}

addNavbar();
addFooter();
updateCartQuantity();

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const cartCategory = document.getElementById("cart-category");
const cartQuantity = document.getElementById("cart-quantity");

[cartCategory, cartQuantity].forEach(el => el.addEventListener("change", renderCartItems));

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const loginUserInput = $("#login-username");
const loginPasswordInput = $("#login-password");
const registerUserInput = $("#register-username");
const registerPasswordInput = $("#register-password");
const roleInput = $("#role");

$(".login-form").on("submit", e => {
  e.preventDefault();
  const username = loginUserInput.val();
  const password = loginPasswordInput.val();

  console.log({ username, password });

  $.ajax({
    url: "api/users/login",
    method: "POST",
    data: JSON.stringify({ username, password }),
    contentType: "application/json",
    dataType: "json",
    success: data => {
      console.log("user found");
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.reload();
    },
    error: error => {
      alert(error.responseText);
    },
  });

  loginUserInput.val("");
  loginPasswordInput.val("");
});

$(".register-form").on("submit", e => {
  e.preventDefault();
  const username = registerUserInput.val();
  const password = registerPasswordInput.val();
  const role = roleInput.val();

  $.ajax({
    url: "api/users/register",
    method: "POST",
    data: JSON.stringify({ username, password, role }),
    contentType: "application/json",
    dataType: "json",
    success: data => {
      console.log("user found");
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.reload();
    },
    error: error => {
      alert(error.responseText);
    },
  });
});

const userString = localStorage.getItem("user");
if (userString) {
  $("#login-overlay").attr("style", "display: none;");
  $(".profile-link").attr("style", "display: block;");
}

//////// Cart Function
$(document).ready(function () {
  $(".remove-item").on("click", function () {
    const listItem = $(this).closest(".d-flex.justify-content-between");
    listItem.remove();
    updateTotal();
  });

  function updateTotal() {
    let total = 0;
    $("#options").each(function () {
      const quantity = parseInt($(this).find(".fw-normal").text());
      const price = parseInt($(this).find(".mb-0").last().text().replace("$", ""));
      const itemTotal = quantity * price;
      total += itemTotal;
    });

    $("#total-amount").text("$" + total.toFixed(2));
  }
});

const socket = io("http://localhost:3000");

socket.on("userCount", count => {
  document.getElementById("userCount").innerText = count;
});
