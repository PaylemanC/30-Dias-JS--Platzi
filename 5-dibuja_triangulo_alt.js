function printTriangle(size, character) {
    let space = " ";
    let triangle = "";

    for (let i = 1; i <= (size - 1); i++) {
        triangle+= (space.repeat(size - i) + character.repeat(i) + `\n`);
    }
    triangle+= character.repeat(size);
    return triangle;
}

printTriangle(5, "*");
//    *
//   **
//  ***
// ****
//*****

printTriangle(8, "$");
//       $
//      $$
//     $$$
//    $$$$
//   $$$$$
//  $$$$$$
// $$$$$$$
//$$$$$$$$