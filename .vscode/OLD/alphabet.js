function checkLetterType(letter) {
    // Convert the letter to lowercase to handle both cases
    const lowerLetter = letter.toLowerCase();
    
    // First check if the input is a single letter
    if (typeof letter !== 'string' || letter.length !== 1) {
        return "Please enter a single letter";
    }
    
    // Check if it's actually a letter from the alphabet
    if (!lowerLetter.match(/[a-z]/)) {
        return "Please enter a letter from the alphabet";
    }
    
    // Check if it's a vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(lowerLetter)) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

// Example usage:
console.log(checkLetterType('A'));    // Output: "Vowel"
console.log(checkLetterType('b'));    // Output: "Consonant"
console.log(checkLetterType('1'));    // Output: "Please enter a letter from the alphabet"
console.log(checkLetterType('abc')); // Output: "Please enter a single letter”
