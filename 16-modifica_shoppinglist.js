function processShoppingList(list) {
    let finalPrice = 0;
    list.forEach(product => {
        if (product.name.includes("oferta")) {
            product.price = (product.price * (100 - 20)) / 100; 
        }
        product.price *= product.quantity;
        delete product.quantity;
        finalPrice += product.price;
    })
    return finalPrice;
}

const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
]
  
processShoppingList(shoppingList)
console.log(shoppingList) 