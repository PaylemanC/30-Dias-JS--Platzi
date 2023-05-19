function groupProducts(products, category) {
    const filterProducts = products.filter(product => product.category === category);
    let output = {
        products: '', 
        totalPrice: 0
    }
    let nameProducts = [];
    filterProducts.forEach(product => { 
        nameProducts.push(product.name);
        output.totalPrice += product.price;
    })
    const totalProducts = nameProducts.join(', ');
    output.products += totalProducts;

    return output;
}  

const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

console.log(groupProducts(products, "Electronics"));
/*{
  products: "Smartphone, Laptop",
  totalPrice: 2000,
}*/
console.log(groupProducts(products, "Clothing"));
/*{
  products: "Shirt, Pants",
  totalPrice: 150,
}*/