"use strict";
const printProduct = (product) => {
    console.log(`name: ${product.name} - price: $${product.price}`);
};
const product = { name: "checken Prod", price: 343 };
printProduct(product);
