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
console.log(calculator.add(10)); //10
console.log(calculator.add(10)); //20
console.log(calculator.subtract(10)); //10
console.log(calculator.clear()); //0