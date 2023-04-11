class Product {
    // Este código no debe ser editado ❌
    constructor(price) {
      this.price = price;
    }
  
    getPrice() {
      return this.price;
    }
  
    getDescription() {
      throw new Error("Este método debe ser implementado en las subclases");
    }
}

class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

class WarrantyDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.price + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} con garantía`
  }
} 

class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }

  getPrice() {
    return this.product.price + 20;
  }

  getDescription() {
    return `${this.product.getDescription()} con seguro de envío`
  }
}

const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
console.log(withShippingInsurance.getDescription());

const basicProduct2 = new BasicProduct(5000, "Refrigerador");
const withWarranty2 = new WarrantyDecorator(basicProduct);
const withShippingInsurance2 = new ShippingInsuranceDecorator(basicProduct);
console.log(withWarranty2.getPrice());
console.log(withWarranty2.getDescription());
console.log(withShippingInsurance2.getPrice());
console.log(withShippingInsurance2.getDescription());