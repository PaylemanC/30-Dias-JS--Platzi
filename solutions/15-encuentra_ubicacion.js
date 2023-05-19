function searchValue(array, value) {
    if (!array.flat().includes(value)) {
      throw new Error("Valor no encontrado");
    }
    let output;
    array.map((subArray, index) => {
      if (subArray.includes(value))
        output = {
          row: index,
          column: subArray.indexOf(value)
        }
    });
    return output;
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const value = 5;
console.log(searchValue(array, value));
/*{
  row: 1,
  column: 1,
}*/
const value2 = 45;
searchValue(array, value2); //"Valor no encontrado"