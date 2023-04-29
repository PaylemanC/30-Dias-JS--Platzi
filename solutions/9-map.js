function myMap(array, func) {
    let output = [];
    for (let i of array) {
      output.push(func(i));
    }
    return output;
}

console.log(myMap([1,2,3,4], (num) => num * 2)); //[2,4,6,8]

console.log(myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name))
//["michi", "firulais"]