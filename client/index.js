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
 
`;

  document.body.insertAdjacentHTML("beforeend", footerHtml);
}

addNavbar();
addFooter();

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

$("#create-account-link").on("click", e => {
  e.preventDefault();
  $(".form .register-form").attr("style", "display: inline;");
  $(".form .login-form").attr("style", "display: none;");
});

$("#login-link").on("click", e => {
  e.preventDefault();
  $(".form .register-form").attr("style", "display: none;");
  $(".form .login-form").attr("style", "display: inline;");
});

const userString = localStorage.getItem("user");
if (userString) {
  $("#login-overlay").attr("style", "display: none;");
  $("#profile-link").attr("style", "display: inline;");
}
