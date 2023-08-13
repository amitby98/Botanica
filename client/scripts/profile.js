const userData1 = JSON.parse(localStorage.getItem("user"));
const userName = userData1 ? userData1.username : "";

if (userName) {
  const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  $("#username").html(capitalizedUserName);
} else {
  $("#username").html("");
}

function renderOrders(orders) {
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

function getOrders() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData ? userData._id : "";
  $.ajax({
    url: "api/orders/" + userId,
    method: "GET",
    success: orders => {
      const totalFilter = $("#total").val();
      const fromFilter = $("#createdAt").val();
      const quantityFilter = $("#quantity").val();
      const lastWeek = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
      const lastMonth = new Date().getTime() - 4 * 7 * 24 * 60 * 60 * 1000;
      const lastYear = new Date().getTime() - 12 * 4 * 7 * 24 * 60 * 60 * 1000;

      const filteredOrders = orders.filter(order => {
        let isShown = true;
        if (quantityFilter) {
          const orderQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);
          if (quantityFilter === "underQuan" && orderQuantity > 5) {
            isShown = false;
          } else if (quantityFilter === "betweenQuan" && (orderQuantity <= 5 || orderQuantity > 10)) {
            isShown = false;
          } else if (quantityFilter === "overQuan" && orderQuantity < 10) {
            isShown = false;
          }
        }

        if (totalFilter) {
          if (totalFilter === "underTotal" && order.total > 100) {
            isShown = false;
          } else if (totalFilter === "overTotal" && order.total <= 100) {
            isShown = false;
          }
        }

        if (fromFilter) {
          if (fromFilter === "week" && new Date(order.createdAt).getTime() < lastWeek) {
            isShown = false;
          } else if (fromFilter === "month" && new Date(order.createdAt).getTime() < lastMonth) {
            isShown = false;
          } else if (fromFilter === "year" && new Date(order.createdAt).getTime() < lastYear) {
            isShown = false;
          }
        }
        return isShown;
      });

      renderOrders(filteredOrders);
    },
  });
}
getOrders();

new Date().getTime();

$("#total").change(getOrders);
$("#createdAt").change(getOrders);
$("#quantity").change(getOrders);
