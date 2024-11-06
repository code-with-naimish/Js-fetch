"use strict";

// const numArr = [1, 3, 8, 0, 6, 3];
// numArr.sort();
// numArr.reverse();
// console.log(numArr);

// const stringArr = ["gopal", "nam", "srya", "kittu"];
// stringArr.sort();
// stringArr.reverse();
// console.log(stringArr);

// const clintsArr = [
//   {
//     age: 75,
//     name: "gopal",
//   },
//   {
//     age: 33,
//     name: "chotu",
//   },
//   {
//     age: 95,
//     name: "motu",
//   },
//   {
//     age: 20,
//     name: "kittu",
//   },
// ];

// clintsArr.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// clintsArr.sort((a, b) => {
//   return b.name.localeCompare(a.name);
// });
// console.log(clintsArr);

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

      //------data filter based on price range b/w min 64 to max 500-------
      // const newArr = data.filter((product) => {
      //   return product.price >= 64 && product.price <= 500;
      // });

      //-------adding saleprice to main array-------
      // const newArr = data.map((product) => {
      //   return { ...product, salePrice: product.price * 2 };
      // });

      //------price based sorting - ascending--------
      // const ascPriceArr = [...data].sort((a,b)  => {
      //   return a.price - b.price;
      // }

      // )

      //------price based sorting - decending--------

      // const decPriceArr = [...data].sort((a, b) => {
      //   return b.price - a.price;
      // });

      //------title (string) based sorting - aecending--------

      // const titleArrAac = [...data].sort((a, b) => {
      //   return a?.title?.localeCompare(b.title);
      // });

      // console.log(titleArrAac);

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

  data.forEach((element) => {
    const card = productCard(element);

    if (card) {
      productList.insertAdjacentHTML("beforeEnd", card);
    }
  });
}

function productCard(product) {
  return `  <div class="product-card">
    <figure>
      <img src="${product.image}" alt="${product.title}">
    </figure>

    <div class="product-details">
      <div>
        <span class="category">${product.category}</span>
        <p class="title two-line-sentence">${product.title}</p>
      </div>
      <div>
        <p class="price">₹${product.price}</p>
      </div>
    </div>
  </div>`;
}
