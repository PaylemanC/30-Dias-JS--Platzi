function printTriangle(size, character) {
    let space = " ";
    let triangle = "";

    for (let i = 1; i <= (size - 1); i++) {
        triangle+= (space.repeat(size - i) + character.repeat(i) + `\n`);
    }
    triangle+= character.repeat(size);
    return triangle;
}

console.log(printTriangle(5, "*"));
console.log(printTriangle(8, "$"));