function calculateAverage(numbers) {
    // Check if the input is an array and not empty
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0; // or you could throw an error instead
    }
    
    // Calculate the sum of all numbers
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    // Calculate and return the average
    return sum / numbers.length;
}

// Example usage:
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateAverage([10, 20, 30]));    // Output: 20
console.log(calculateAverage([]));              // Output: 0 (or could throw error)
console.log(calculateAverage([-5, 0, 5]));      // Output: 0
