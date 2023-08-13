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
    const dateDiv = $("<div>").addClass("date").html(`
        <h5>Order Number: ${order._id}</h5>
        <h6 class="card-text"><i class="far fa-clock pe-2"></i>${moment(order.createdAt).format("DD/MM/YYYY HH:mm:ss")}</h6>
      `);
    const itemsDiv = $("<div>")
      .addClass("items-content")
      .html(order.items.map(item => `<p>${item.name} &nbsp; X${item.quantity} &nbsp; $${item.price}</p>`).join(""));
    const totalH3 = $("<h5>").text(`Total: $${order.total}`);

    orderDiv.append(dateDiv, itemsDiv, totalH3);
    $("#order-container").append(orderDiv);
  }
}

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
