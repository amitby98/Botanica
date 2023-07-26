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
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item mx-2 dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Products</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./products.html">Plants</a></li>
            <li><a class="dropdown-item" href="./products.html">Extras</a></li>
            <li><a class="dropdown-item" href="./products.html">Sale</a></li>
          </ul>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="./contact.html">Contact</a>
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
          <a id="login-overlay" class="nav-link" data-bs-toggle="offcanvas" href="#offcanvas-2" role="button" aria-controls="offcanvas-2">
            <i class="fa-solid fa-user"></i>
          </a>
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
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown button</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-2" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input id="register-username" type="text" placeholder="email address" />
          <input id="register-password" type="password" placeholder="password" />
          <select name="role" id="role">
            <option value="buyer" selected>Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button type="submit">create</button>
          <p class="message">Already registered? <a href="#" id="login-link">Sign In</a></p>
        </form>
        <form class="login-form">
          <input id="login-username" type="text" placeholder="username" />
          <input id="login-password" type="password" placeholder="password" />
          <button type="submit">login</button>
          <p class="message">Not registered? <a id="create-account-link" href="#">Create an account</a></p>
        </form>
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

$(".message a").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
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
    },
  });
});

const userString = localStorage.getItem("user");
if (userString) {
  $("#login-overlay").attr("style", "display: none;");
  $("#profile-link").attr("style", "display: block;");
}
