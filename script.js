"use strict";
const loaderBox = document.querySelector("#loader-box");
const noDataBox = document.querySelector("#no-data-box");
const mainData = document.querySelector("#main-data");

const fetchProducts = async function () {
  noDataBox.classList.add("hidden");
  mainData.classList.add("hidden");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong! Please try again later ");
    }
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      console.log(data);

      // noDataBox.classList.add("hidden");
      mainData.classList.remove("hidden");
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

function spinner() {}
function processUi() {}
function showToast() {}
