const currentPage = window.location.pathname.slice(1);

function addNavbar() {
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
        </li> <li class="nav-item mx-2">
          <a class="nav-link ${currentPage === "contact.html" ? "selected" : ""}" href="./contact.html">Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav me-right">
        <!-- <input class="form-control me-2" type="text" placeholder="Search" /> -->
        <li class="nav-item mx-2">
          <a class="nav-link" id="search" type="button"> <i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
        <li class="nav-item mx-2">
          <a id="login-overlay" class="nav-link" data-bs-toggle="modal" href="#loginModal" role="button" aria-controls="loginModal"><i class="fa-solid fa-user"></i></a>
          <a id="profile-link" class="nav-link" href="/profile.html">
            <i class="fa-solid fa-user"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Shopping Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
    <a class="checkout" href="/checkout.html" role="button">Checkout</a>
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
                <option value="seller">Seller</option>
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

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

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
  });
});

const userString = localStorage.getItem("user");
if (userString) {
  $("#login-overlay").attr("style", "display: none;");
  $("#profile-link").attr("style", "display: block;");
}

//Carousel Functionality
$(document).ready(function () {
  $("#intro-type .intro-types").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

//////// Map Function
let map;
async function initMap() {
  const position = { lat: 31.24, lng: 35.04 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "my-project-botanica-395208",
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    draggable: true,
  });
}

initMap();
