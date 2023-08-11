const userData1 = JSON.parse(localStorage.getItem("user"));
const userName = userData1 ? userData1.username : "";

if (userName) {
  const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  $("#username").html(capitalizedUserName);
} else {
  $("#username").html("");
}

function addOrder(orders) {
  $("#order-container").html("");
  for (const order of orders) {
    const orderDiv = $("<div>").addClass("div-box");
    const dateDiv = $("<div>")
      .addClass("date")
      .html(`<h3>${moment(order.createdAt).format("DD/MM/YYYY HH:mm:ss")}</h3>`);
    const itemsP = $("<p>").html(
      order.items
        .map(
          item => `<span>${item.name}</span>
     <span>Quantity: ${item.quantity}</span>
     <span>Price: $${item.price}</span></br>`
        )
        .join("<br>")
    );
    const totalH3 = $("<h3>").text(`$${order.total}`);

    orderDiv.append(dateDiv, itemsP, totalH3);
    $("#order-container").append(orderDiv);
  }
}

// const userId = "64d68cfd23ae1b07ede62a90";
const userData = JSON.parse(localStorage.getItem("user"));
const userId = userData ? userData._id : "";

$.ajax({
  url: "api/orders/" + userId,
  method: "GET",
  success: data => {
    console.log(data);
    addOrder(data);
  },
});
