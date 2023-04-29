function solution (valor) {
    return typeof valor; 
}

console.log(solution(1)) //"number"
console.log(solution("Dieguillo")) //"string"
console.log(solution(true)) //"boolean"