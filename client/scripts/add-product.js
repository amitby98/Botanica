console.log("s");
$("#add-form").on("submit", function (e) {
  e.preventDefault();
  const nameValue = $("#name-input").val();
  const priceValue = $("#price-input").val();
  const imageUrl = $("#image-input").val();
  const category = $("#category").val();
  const size = $("#size").val();
  const light = $("#light").val();

  $.ajax({
    url: "api/products",
    method: "POST",
    data: JSON.stringify({
      nameValue,
      priceValue,
      category,
      size,
      light,
      imageUrl,
    }),
    contentType: "application/json",
    dataType: "json",
    success: data => {
      alert("Product Added");
    },
    error: error => {
      alert("Error");
    },
  });
});
