function getOddEvenNumbers(n) {
    const evens = [];
    const odds = [];


    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens.push(i); 
        } else {
            odds.push(i);  
        }
    }

    return {
        evenNumbers: evens,
        oddNumbers: odds
    };
}

const result = getOddEvenNumbers(15);
console.log("Even numbers:", result.evenNumbers); 
console.log("Odd numbers:", result.oddNumbers); 


