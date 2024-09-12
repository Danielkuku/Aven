const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-togggler");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in the table
// orders.forEach((order) => {
//   const tr = document.createElement("tr");
//   const trContent = ` <td>${order.productName}</td>
//                 <td>${order.productNumber}</td>
//                 <td>${order.productStatus}</td>
//                 <td class="${
//                   order.shipping === "Declined"
//                     ? "danger"
//                     : order.shipping === "pending"
//                     ? "warning"
//                     : "primary"
//                 }">
//   ${order.shipping}
// </td>

//                 <td class="primary">{order.}</td>`;
// });

orders.forEach((order) => {
  const tr = document.createElement("tr");

  // Declare and set the shippingClass based on the order's shipping status
  let shippingClass = "";
  if (order.shipping === "Declined") {
    shippingClass = "danger";
  } else if (order.shipping === "pending") {
    shippingClass = "warning";
  } else {
    shippingClass = "primary";
  }

  // Create the table row content
  const trContent = ` 
      <td>${order.productName}</td>
      <td>${order.productNumber}</td>
      <td>${order.productStatus}</td>
      <td class="${shippingClass}">
        ${order.shipping}
      </td>
      <td class="primary">Details</td>`;

  // Append the created content to the row
  tr.innerHTML = trContent;

  document.querySelector("table tbody").appendChild(tr);
});
