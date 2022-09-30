interface FarProduct {
  name: string;
  price: number;
}

const printProduct = (product: FarProduct): void => {
  console.log(`name: ${product.name} - price: $${product.price}`);
};
const product: FarProduct = { name: "checken Prod", price: 343 };

printProduct(product);
