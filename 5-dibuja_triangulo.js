function printTriangle (size, character) {
    let spaces = "";
    let characters = character;
    let countSpaces = size - 1; 
    let countCharacters = 1; 
    
    for (let i = 0; i < countSpaces; i++) {
        spaces+= " ";  
    }
    console.log(spaces + character);
  
    let line = 1;
    while (line < size) {
        for (let i = 0; i < countCharacters; i++) {
            characters+= character;
            spaces = "";
            countSpaces--;
            for (let i = 0; i < countSpaces; i++) {
                spaces+= " ";  
            }
        }     
        line++;
        console.log(spaces + characters);
    }
}

printTriangle(5, "*");
printTriangle(6, "$");