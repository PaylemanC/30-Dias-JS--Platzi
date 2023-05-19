function processPay(method, quantity) {
    return method.makePay(quantity)
}

class Pay {
    makePay(quantity) {
      return { realized: true, quantity: quantity }
    }
}

class PayPal extends Pay {
    constructor(email) {
      super();
      this.email = email;
    }
  
    makePay(quantity) {
      return { 
        ...super.makePay(quantity),
        platform: "PayPal", 
        email: this.email
      }
    }
}

class Card extends Pay {
    constructor(cardNumber) {
      super();
      this.cardNumber = cardNumber;
    }
  
    makePay(quantity) {
      if (this.cardNumber.length != 16) {
        throw new Error("Número de tarjeta inválida.")
      } else {
        return {
          ...super.makePay(quantity),
          lastCardNumbers: this.cardNumber.substring(12, 17)
        }
      }
    }
}

class Cash extends Pay {
    constructor() {
      super();
    }
}  

const card = new Card("4913478952471122")
console.log(processPay(card, 100));
/*{
  realized: true, 
  quantity: 100, 
  lastCardNumbers: '1122'
}*/

const paypal = new PayPal("test@mail.com")
console.log(processPay(paypal, 240));
/*{
  realized: true,
  quantity: 240,
  platform: 'PayPal',
  email: 'test@mail.com'
}*/

const cash = new Cash()
console.log(processPay(cash, 400));
/*{
  realized: true, 
  quantity: 400
}*/