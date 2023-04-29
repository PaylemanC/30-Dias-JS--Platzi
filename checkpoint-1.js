function findLargestPalindrome(words) {
    let palindrome = null;
    for (let word of words) {
        let reversedWord = word.split("").reverse().join("");
        if (reversedWord === word && (palindrome == null || word.length > palindrome.length)) {
            palindrome = word;
        }
    }
    return palindrome;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"])); //"racecar"
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"])); //null