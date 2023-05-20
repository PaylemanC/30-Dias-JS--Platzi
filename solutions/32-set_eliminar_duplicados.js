function removeDuplicates(values) {
    return Array.from(new Set(values));
}

//Opción también válida:
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
console.log(removeDuplicates(fruits)); //["melon", "mango", "banana", "apple"]

const numbers = [1, 2, 3, 1, 2, 3];
console.log(removeDuplicates(numbers)); //[1, 2, 3]