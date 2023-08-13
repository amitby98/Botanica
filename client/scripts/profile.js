const userData1 = JSON.parse(localStorage.getItem("user"));
const userName = userData1 ? userData1.username : "";

let allOrders = [];
let renderedOrders = [];

if (userName) {
  const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  $("#username").html(capitalizedUserName);
} else {
  $("#username").html("");
}

function renderOrders(orders) {
  renderedOrders = orders;
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
      allOrders = orders;
      renderGraph(orders);
      const totalFilter = $("#total").val();
      const fromFilter = $("#createdAt").val();
      const quantityFilter = $("#quantity").val();
      const clientId = $("#client-input").val();
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

        if (clientId) {
          if (!order.userId.includes(clientId)) {
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
$("#client-input").change(getOrders);

if (isAdmin) {
  document.getElementById("client-input-container").style.display = "block";
}

function renderGraph(orders) {
  if (!isAdmin) {
    return;
  }
  {
    // Create data
    var data = orders.map(order => {
      const orderQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);
      return {
        x: orderQuantity,
        y: order.total,
      };
    });

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 40, bottom: 30, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svG = d3
      .select("#scatter_area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale and Axis
    var x = d3
      .scaleLinear()
      .domain([0, data.length]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, width]); // This is the corresponding value I want in Pixel
    svG
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // X scale and Axis
    var y = d3
      .scaleLinear()
      .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
      .range([height, 0]); // This is the corresponding value I want in Pixel
    svG.append("g").call(d3.axisLeft(y));

    // Add 3 dots for 0, 50 and 100%
    svG
      .selectAll("whatever")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.x);
      })
      .attr("cy", function (d) {
        return y(d.y);
      })
      .attr("r", 7);

    svG
      .append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height - 15)
      .text("number of items (N)");

    svG.append("text").attr("class", "y label").attr("text-anchor", "end").attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").text("total order (dollars)");
  }
}
