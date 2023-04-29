function isLeapYear(year) {
    if (year % 1 != 0 || year <= 0) {
      return false;
    } else {
      if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
        return true;
      } else {
        return false;
      }
    }
}

console.log(isLeapYear(2000)); //true
console.log(isLeapYear(-2024)); //false
console.log(isLeapYear(1984.25)); //false