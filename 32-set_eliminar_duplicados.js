function removeDuplicates(values) {
    return Array.from(new Set(values));
}

//Opción válida:
/* function removeDuplicates(values) {
  let mySet = new Set()
  values.forEach(element => mySet.add(element));
  return Array.from(mySet);
} */

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];
console.log(removeDuplicates(fruits))

const numbers = [1, 2, 3, 1, 2, 3];
console.log(removeDuplicates(numbers))