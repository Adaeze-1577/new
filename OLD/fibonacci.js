// HOW THE PRIME NUMBER WILL WORK
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// HOW TO GENERATE THE FIBONACCI SEQUENCE UP TO 100
let fibSequence = [0, 1]; // ADD UP THE FIRST TWO FIBONACCI NUMBERS
let nextFib = fibSequence[0] + fibSequence[1];

while (nextFib <= 50000000) {
    fibSequence.push(nextFib);
    nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
}

// ASSIGNMENT PROPER, DISPLAY FIBONACCI SEQUENCE AND INDICATE THE PRIME NUMBERS
console.log("Fibonacci numbers up to 100:");
for (let num of fibSequence) {
    if (isPrime(num)) {
        console.log(`${num} (Prime)`);
    } else {
        console.log(num);
    }
}
