let renderedOrders = [];
function addOrder(orders) {
  renderedOrders = orders;
  $("#order-container").html("");
  for (const order of orders) {
    $("#order-container").append(`
      <div class="div-box">
        <div class="date">
        <h3>${order.timestamps}</h3>
        </div>
        <p>${order.items}</p>
        <h3>${order.total}</h3>
      </div>
  `);
  }
}

//Add new order
// function addOrder(date, content, total) {
//   const container = document.getElementById("order-container");

//   const divBox = document.createElement("div");
//   divBox.classList.add("div-box");

//   const dateDiv = document.createElement("div");
//   dateDiv.classList.add("date");
//   const dateH3 = document.createElement("h3");
//   dateH3.textContent = date;
//   dateDiv.appendChild(dateH3);

//   const contentP = document.createElement("p");
//   contentP.textContent = content;

//   const totalH3 = document.createElement("h3");
//   totalH3.textContent = total;

//   divBox.appendChild(dateDiv);
//   divBox.appendChild(contentP);
//   divBox.appendChild(totalH3);

//   container.appendChild(divBox);
// }

// addOrder();

// $.ajax({
//   url: "api/orders/:userId",
//   method: "GET",
//   success: data => {
//     console.log(data);
//     addOrder(data.orders);
//   },
// });

const userId = "64d606938d7ea4db3ab2508d";

$.ajax({
  url: "api/orders/" + userId,
  method: "GET",
  success: data => {
    console.log(data);
    // data.orders.forEach(order => {
    addOrder(order.items, order.total, order.userId);
    // });
  },
  error: (xhr, status, error) => {
    console.error(error);
  },
});
