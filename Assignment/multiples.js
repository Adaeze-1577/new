function getMultiples(number, limit) {
    const multiples = [];
    
    for (let i = number; i <= limit; i += number) {
        multiples.push(i);
    }
    
    return multiples;
}

// Example usage
console.log(getMultiples(3, 15));  
console.log(getMultiples(5, 25));  
console.log(getMultiples(7, 50)); 
