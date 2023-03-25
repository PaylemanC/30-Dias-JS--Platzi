function createCalculator() {
  let total = 0;

  const add = (number) => total+= number;
  const subtract = (number) => total -= number;
  const multiply = (number) => total *= number;
  const divide = (number) => total /= number;
  const clear = () => total = 0;
  const getTotal = () => total;

  return { add, subtract, multiply, divide, clear, getTotal }
}

const calculator = createCalculator()
console.log(calculator.add(10));

const calculator2 = createCalculator()
console.log(calculator2.add(10));
console.log(calculator2.subtract(-10));

const calculator3 = createCalculator()
console.log(calculator3.add(10));
console.log(calculator3.subtract(-10));
console.log(calculator3.clear());