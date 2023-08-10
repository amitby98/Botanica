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
        ${
          currentPage === "products.html"
            ? `<li class="nav-item mx-2">
        <a class="nav-link" id="search" data-bs-toggle="modal" data-bs-target="#search-modal" type="button"> <i class="fa-solid fa-magnifying-glass"></i></a>
      </li>`
            : ""
        }
        
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
<div class="modal fade" id="search-modal" role="dialog" aria-labelledby="modalSearchTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" id="search-container" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalSearchTitle">Search & Filters</h5>
        <button data-bs-dismiss="modal" class="btn-close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div id="searchhome">
            <!--<h2 id="user" class="page-header">Search & Export</h2>--><br /><br />
            <button type="button" class="btn btn-default" id="search">Search</button>
            <h3 id="user" class="page-header">Search criteria</h3>

            <div class="row">
              <div class="col-lg-6">
                <input type="text" class="form-control" placeholder="Keywords" id="keywords" name="keywords" /><br />
                <div id="alertdiv" class="hide alert alert-danger" role="alert">Please enter a valid search term</div>
              </div>
            </div>
            <!-- row -->
            <h3 class="page-header">Filter by</h3>
            <div id="filtersection">
              <div class="row" id="filtertags">
                <div class="col-lg-9 bigtext">
                  <input type="text" class="form-control" id="tagsinput" value="" data-role="tagsinput" placeholder="Click Add Filter again to add more filters" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-5">
                  <div id="filterinput">
                    <div class="input-group"><span class="input-group-addon"></span><input type="text" id="fiterinputtext" class="form-control" value="" /></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <button type="button" class="btn btn-default" id="addfilter">Add</button>
                </div>
              </div>
            </div>
            <br />
            <button type="button" class="btn btn-default" id="showfilter">Add Filter</button><br /><br />
            <div id="treeselect" class="tree">
              <ul>
                <li>
                  <span class="badge badge-success"><i class="glyphicon glyphicon-plus"></i> Name Info</span>
                  <ul>
                    <li><span data-fq="preferredFirstName">Preferred First Name</span></li>
                    <li><span data-fq="currentLastName">Current Last Name</span></li>
                    <li><span data-fq="salutation">Salutation</span></li>
                    <li><span data-fq="middleInitialOrName">Middle Initial/Name</span></li>
                    <li><span data-fq="gender">Gender</span></li>
                    <li><span data-fq="secondaryEmail">Secondary Email</span></li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <span class="badge badge-success"><i class="glyphicon glyphicon-plus"></i> Professional Info</span>
                  <ul>
                    <li><span data-fq="currentOrganization">Current Organization</span></li>
                    <li><span data-fq="newJobStartDate">Start Date</span></li>
                    <li><span data-fq="newJobTitle">Title</span></li>
                    <li><span data-fq="workStatus">Work Status</span></li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <span class="badge badge-success"><i class="glyphicon glyphicon-plus"></i> Contact Info</span>
                  <ul>
                    <li><span data-fq="mobilePhone">Mobile Phone</span></li>
                    <li><span data-fq="city">City</span></li>
                    <li><span data-fq="country">Country</span></li>
                    <li><span data-fq="state">State</span></li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <span class="badge badge-success"><i class="glyphicon glyphicon-plus"></i> Education Info</span>
                  <ul>
                    <li><span data-fq="universityOrCollege"> University or College</span></li>
                    <li><span data-fq="degree"> Degree</span></li>
                    <li><span data-fq="graduationYear"> Graduation Year</span></li>
                    <li><span data-fq="concentration"> Concentration</span></li>
                  </ul>
                </li>
              </ul>
              <!--ul>
                <li>
                    <span class="badge badge-success"><i class="glyphicon glyphicon-plus"></i> Additional Info</span>
                    <ul>
                        <li><span data-fq="corporateBoardMemberships"> Corporate Board Membership</span></li>
                        <li><span data-fq="ethnicity"> Ethnicity</span></li>
                        <li><span data-fq="languages"> Languages</span></li>
                        <li><span data-fq="militaryService"> Military Service</span></li>
                        <li><span data-fq="credentialsAndLicences"> Credentials And Licenses</span></li>
                    </ul>
                </li>
            </ul-->
            </div>
            <h3 id="user" class="page-header">View below fields</h3>
            <div class="btn-toolbar" role="toolbar">
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-default" id="freqselect">Select Frequent</button>
                <button type="button" class="btn btn-default" id="selectall">Select All</button>
                <button type="button" class="btn btn-default" id="clearall">Clear All</button>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <h4 id="user" class="page-header">Name Info</h4>
                <div class="btn-toolbar" role="toolbar">
                  <div class="btn-group btn-group-xs">
                    <button type="button" class="btn btn-default subselectall">Select All</button>
                    <button type="button" class="btn btn-default subclearall">Clear All</button>
                  </div>
                </div>
                <br />
                <input type="checkbox" id="sid" displayname="SID" /> SID<br /><br />
                <input type="checkbox" id="preferredFirstName" /> Preferred First Name<br /><br />
                <input type="checkbox" id="currentLastName" /> Current Last Name<br /><br />
                <input type="checkbox" id="salutation" /> Salutation<br /><br />
                <input type="checkbox" id="middleInitialOrName" /> Middle Initial/Name<br /><br />
                <input type="checkbox" id="gender" /> Gender<br /><br />
                <input type="checkbox" id="secondaryEmail" /> Secondary Email<br /><br />
              </div>
              <!-- /.col-lg-3 -->
              <div class="col-lg-3">
                <h4 id="professionalInfo" class="page-header">Contact Info</h4>
                <div class="btn-toolbar" role="toolbar">
                  <div class="btn-group btn-group-xs">
                    <button type="button" class="btn btn-default subselectall">Select All</button>
                    <button type="button" class="btn btn-default subclearall">Clear All</button>
                  </div>
                </div>
                <br />
                <input type="checkbox" id="mobilePhone" /> Mobile Phone<br /><br />
                <input type="checkbox" id="city" /> City<br /><br />
                <input type="checkbox" id="country" /> Country<br /><br />
                <input type="checkbox" id="state" /> State<br /><br />
              </div>
              <!-- /.col-lg-3 -->

              <div class="col-lg-3">
                <h4 id="professionalInfo" class="page-header">Education Info</h4>
                <div class="btn-toolbar" role="toolbar">
                  <div class="btn-group btn-group-xs">
                    <button type="button" class="btn btn-default subselectall">Select All</button>
                    <button type="button" class="btn btn-default subclearall">Clear All</button>
                  </div>
                </div>
                <br />
                <input type="checkbox" id="universityOrCollege" /> University or College<br /><br />
                <input type="checkbox" id="degree" /> Degree<br /><br />
                <input type="checkbox" id="graduationYear" /> Graduation Year<br /><br />
                <input type="checkbox" id="concentration" /> Concentration<br /><br />
              </div>
              <!-- /.col-lg-3 -->

              <!--div class="col-lg-3">
                <h4 id="professionalInfo" class="page-header">Additional Info</h4>
                <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-default subselectall">Select All</button>
                        <button type="button" class="btn btn-default subclearall">Clear All</button>
                    </div>
                </div><br>
                <input type="checkbox" id="corporateBoardMemberships"> Corporate Board Membership<br><br>
                <input type="checkbox" id="ethnicity"> Ethnicity<br><br>
                <input type="checkbox" id="languages"> Languages<br><br>
                <input type="checkbox" id="militaryService"> Military Service<br><br>
                <input type="checkbox" id="credentialsAndLicences"> Credentials And Licenses<br><br>
            </div--><!-- /.col-lg-3 -->

              <div class="col-lg-3">
                <h4 id="professionalInfo" class="page-header">Professional Info</h4>
                <div class="btn-toolbar" role="toolbar">
                  <div class="btn-group btn-group-xs">
                    <button type="button" class="btn btn-default subselectall">Select All</button>
                    <button type="button" class="btn btn-default subclearall">Clear All</button>
                  </div>
                </div>
                <br />
                <input type="checkbox" id="currentOrganization" /> Current Organization<br /><br />
                <input type="checkbox" id="newJobStartDate" /> Start Date<br /><br />
                <input type="checkbox" id="newJobTitle" /> Title<br /><br />
                <input type="checkbox" id="workStatus" /> Work Status<br /><br />
              </div>
              <!-- /.col-lg-3 -->
            </div>
            <!-- /.row -->
            <br /><br />
            <button type="button" class="btn btn-default" id="search2">Search</button><br /><br /><br /><br />
          </div>
          <div id="contentloading" class="hide">
            <div id="spinner"><img src="/images/alumni/spin.gif" alt="Loading" width="50" height="50" /></div>
          </div>
          <div id="searchresults" class="hide">
            <br />
            <button type="button" id="backtosearch" class="btn btn-default">&larr; Back</button>
            <h2 id="user" class="page-header">Search Results <a href="#" id="exportlink" class="pull-right btn btn-default">Export as CSV</a></h2>

            <div class="well well-sm" id="searchmessage"></div>
            <br />
            <div style="height: 450px; overflow: auto">
              <table class="table table-hover" id="resultstable"></table>
            </div>
            <div id="pagination">
              <h3>
                <small>
                  <div id="pagnum">Showing 1 to 10</div>
                </small>
              </h3>
              <ul class="pager">
                <li class="previous"><a href="#" alt="0" id="previous">&larr; Previous 10</a></li>
                <li class="next"><a href="#" alt="10" id="next">Next 10 &rarr;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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

// $(document).ready(function () {
//   console.log("Document ready");
//   // Show the initially active carousel
//   // $("#carousel-indoor").addClass("active");

//   // Handle the click event for each category button
//   $(".intro-types").click(function (e) {
//     e.preventDefault();

//     // Get the target carousel ID from the href attribute of the clicked button
//     var targetCarousel = $(this).attr("href");

//     // Remove "active" class from all carousels
//     $(`${targetCarousel}.carousel-item`).removeClass("active");

//     // Add "active" class to the target carousel
//     $(`${targetCarousel}.carousel-item`).addClass("active");
//     console.log(targetCarousel);
//     console.log(`${targetCarousel} .carousel-item`);
//   });
// });

//////// Map Function
let map;
let infowindow;

async function initMap() {
  const position = { lat: 31.24, lng: 35.04 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "my-project-botanica-395208",
  });

  const cities = [
    { name: "Jerusalem", lat: 31.7683, lng: 35.2137 },
    { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
    { name: "Haifa", lat: 32.794, lng: 34.9896 },
    // Add more cities with their respective coordinates
  ];

  infowindow = new google.maps.InfoWindow();

  cities.forEach(city => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: city.lat, lng: city.lng },
      title: `Botanica shop, ${city.name}`,
    });
  });
}
initMap();
