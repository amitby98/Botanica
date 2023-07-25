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
          <button class="btn btn-primary nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i class="fa-solid fa-cart-shopping"></i></button>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="/profile.html"><i class="fa-solid fa-user"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
