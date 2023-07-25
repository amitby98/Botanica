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

addNavbar();
