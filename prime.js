function checkNumber(num) {
    // Handle edge cases
    if (num <= 1) return "wrong value";
    if (num === 2) return true; 
    
    // Check if even (but not 2)
    if (num % 2 === 0) return "wrong value";
    
    // Check for prime
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

// Test cases
console.log(checkNumber(2));     
console.log(checkNumber(7));     
console.log(checkNumber(9));    
console.log(checkNumber(4));     
console.log(checkNumber(1));     
