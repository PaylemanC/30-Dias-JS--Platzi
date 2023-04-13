function removeDuplicates(values) {
    return Array.from(new Set(values));
}

//Opción válida:
/* function removeDuplicates(values) {
  let mySet = new Set()
  values.forEach(element => mySet.add(element));
  return Array.from(mySet);
} */