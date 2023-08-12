//Carousel Functionality
$(document).ready(function () {
  $("#intro-type .intro-types").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

document.querySelector("#indoor-btn").onclick = () => {
  document.querySelector("#indoor").style.display = "block";
  document.querySelector("#outdoor").style.display = "none";
};
document.querySelector("#outdoor-btn").onclick = () => {
  document.querySelector("#indoor").style.display = "none";
  document.querySelector("#outdoor").style.display = "block";
};
