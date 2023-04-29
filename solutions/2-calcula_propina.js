function calculateTip(billAmount, tipPercentage) {
    return (billAmount / 100) * tipPercentage;
}
  
console.log(calculateTip(100, 10)); //10
console.log(calculateTip(1524.33, 25)); //381.0825