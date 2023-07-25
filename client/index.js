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
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Products</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./products.html">Plants</a></li>
                <li><a class="dropdown-item" href="./products.html">Extras</a></li>
                <li><a class="dropdown-item" href="./products.html">Sale</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html">Contact</a>
            </li>
          </ul>
          <form class="d-flex">
            <!-- <input class="form-control me-2" type="text" placeholder="Search" /> -->         <li class="nav-item">
              <a class="nav-link" type="button">Search</a>
            </li>
          </form>
          <ul class="navbar-nav me-right">
            <li class="nav-item">
              <a class="nav-link" href="/shop.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile.html">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

  document.body.insertAdjacentHTML("afterbegin", navbarHtml);
}

addNavbar();
