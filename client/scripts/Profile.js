//Add new order
function addOrder(date, content, total) {
  const container = document.getElementById("order-container");

  const divBox = document.createElement("div");
  divBox.classList.add("div-box");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("Date");
  const dateH3 = document.createElement("h3");
  dateH3.textContent = date;
  dateDiv.appendChild(dateH3);

  const contentP = document.createElement("p");
  contentP.textContent = content;

  const totalH3 = document.createElement("h3");
  totalH3.textContent = total;

  divBox.appendChild(dateDiv);
  divBox.appendChild(contentP);
  divBox.appendChild(totalH3);

  container.appendChild(divBox);
}

// הוספת ריבוע עם תוכן חדש
addOrder();
