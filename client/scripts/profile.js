document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the server (replace with your actual API endpoint)
  fetch("your-api-endpoint")
    .then(response => response.json())
    .then(data => {
      // Update the elements with the received data
      document.getElementById("username").textContent = data.username;
      document.getElementById("username-placeholder").textContent = data.username;
      document.getElementById("email-placeholder").textContent = data.email;
      document.getElementById("password-placeholder").textContent = data.password;
      document.getElementById("phone-placeholder").textContent = data.phone;
    })
    .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("DOMContentLoaded", function () {
  // Simulated data from the server
  const pastOrdersData = [
    {
      date: "July 15, 2023 10:30 AM",
      items: [
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Flower", quantity: 5 },
      ],
      totalPrice: 50.0,
    },
    {
      date: "July 2, 2023 13:30 AM",
      items: [
        { name: "Tree", quantity: 9 },
        { name: "plant", quantity: 3 },
        { name: "Trees", quantity: 3 },
        { name: "Treeto", quantity: 3 },
        { name: "Flower", quantity: 5 },
      ],
      totalPrice: 99.0,
    },
    {
      date: "July 15, 2023 10:30 AM",
      items: [
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Tree", quantity: 3 },
        { name: "Flower", quantity: 5 },
      ],
      totalPrice: 50.0,
    },
    {
      date: "July 2, 2023 13:30 AM",
      items: [
        { name: "Tree", quantity: 9 },
        { name: "plant", quantity: 3 },
        { name: "Trees", quantity: 3 },
        { name: "Treeto", quantity: 3 },
        { name: "Flower", quantity: 5 },
      ],
      totalPrice: 99.0,
    },
    // Add more past orders here
  ];

  const lastOrderContainer = document.querySelector(".last-order");

  pastOrdersData.forEach(order => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("profile-card", "p-3");

    const orderDetails = document.createElement("div");
    orderDetails.classList.add("profile-details");

    const orderHeader = document.createElement("div");
    orderHeader.classList.add("last-order-header");
    orderHeader.textContent = "Last Order: " + order.date;

    const orderContent = document.createElement("div");
    orderContent.classList.add("last-order-content", "last-order-scrollable");

    order.items.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("last-order-item");
      itemDiv.innerHTML = `<i class="fas fa-leaf"></i> ${item.name} x${item.quantity}`;
      orderContent.appendChild(itemDiv);
    });

    const orderFooter = document.createElement("div");
    orderFooter.classList.add("last-order-footer");
    orderFooter.textContent = "Total Price: $" + order.totalPrice.toFixed(2);

    orderDetails.appendChild(orderHeader);
    orderDetails.appendChild(orderContent);
    orderDetails.appendChild(orderFooter);

    orderDiv.appendChild(orderDetails);
    lastOrderContainer.appendChild(orderDiv);
  });
});
