class Product {
    // No debes editar esta clase ❌
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    addToCart() {
      throw new Error(
        "La lógica de este método debe ser implementada por las clases hijas"
      );
    }
}

class Article extends Product {
    addToCart() {
        return console.log(`Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`);
    }
}
  
class Service extends Product {
    addToCart() {
        return console.log(`Agregando el servicio ${this.name} al carrito`);
    }
}
  
class Cart {
    constructor(productList = []) {
        this.productList = productList;
    }

    addProduct(product) {
        this.productList.push(product);
        product.addToCart(); 
    }

    deleteProduct(product) {
        const deletedProduct = this.productList.findIndex(i => i === product);
        this.productList.splice(deletedProduct, 1);
    }

    calculateTotal() {
        return this.productList.reduce((acum, product) => (acum + (product.price * product.quantity)), 0);
    }

    getProducts() {
        return this.productList;
    }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book); //Agregando 2 unidades del artículo Libro al carrito
cart.addProduct(course); //Agregando el servicio Curso al carrito
console.log(cart.calculateTotal()); //320
cart.deleteProduct(book);
console.log(cart.calculateTotal()); //120