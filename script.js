"use strict";

const fetchProducts = async function () {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong! Please try again later ");
    }
    const data = await response.json();
    delete data[0].title;
    console.log(data);
    const isArray = Array.isArray(data);
    if (isArray && data.length > 0) {
      const titleArray = data.map(function (product, i, arr) {
        return product?.title;
      });
      const filteredArray = titleArray.filter(function (val, i, arr) {
        // return (
        //   val !== undefined ||
        //   val !== "" ||
        //   val !== NaN ||
        //   val !== 0 ||
        //   val !== null
        // );  dont do this, do this👇🏻

        return val;
      });
      console.log(filteredArray);
    }

    console.log(isArray);
  } catch (error) {
    console.log(error);
  } finally {
  }
};

fetchProducts();
