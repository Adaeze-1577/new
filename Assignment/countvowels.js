function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// test
console.log(countVowels("Hello World"));  
console.log(countVowels("JavaScript"));   
