"use strict";

const fetchProducts = async function () {
  const loaderBox = document.querySelector("#loader-box");
  const noDataBox = document.querySelector("#no-data-box");
  const mainData = document.querySelector("#main-data");
  noDataBox.classList.add("hidden");
  mainData.classList.add("hidden");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong! Please try again later ");
    }
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      // console.log(data);

      // noDataBox.classList.add("hidden");
      mainData.classList.remove("hidden");
      processUi(data);
    } else {
      // mainData.classList.add("hidden");
      noDataBox.classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);

    noDataBox.classList.remove("hidden");
    // mainData.classList.add("hidden");
  } finally {
    loaderBox.classList.add("hidden");
  }
};

fetchProducts();

// function spinner() {}

// function showToast() {}

function processUi(data) {
  const productList = document.querySelector("#product-list");
  console.log(data);
  data.forEach((element) => {
    const card = productCard(element);
    console.log(card);

    if (card) {
      productList.insertAdjacentHTML("beforeEnd", card);
    }
  });
}

function productCard(product) {
  return ` <div class="product-card">
              <figure>
                <img src="${product.image}" alt="${product.title}">
              </figure>

              <div class="product-details">
                <span class="category">${product.category}</span>
                <p class="title">${product.title}</p>
                <p class="price">₹${product.price}</p>
              </div>
            </div>`;
}
