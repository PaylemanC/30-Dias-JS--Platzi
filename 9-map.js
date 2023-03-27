function myMap(array, func) {
    let output = [];
    for (let i of array) {
      output.push(func(i));
    }
    return output;
}

console.log(myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name))