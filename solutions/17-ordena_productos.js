function sortByAvailabilityAndPrice(products) {
    const orderedProducts = [...products];
    orderedProducts.sort((a, b) => a.price - b.price);
    orderedProducts.sort((a, b) => b.inStock - a.inStock)
    return orderedProducts;
}

const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
]

console.log(sortByAvailabilityAndPrice(products));
/*[
  { name: "product1", price: 10, inStock: true },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
  { name: "product2", price: 20, inStock: false },
]*/