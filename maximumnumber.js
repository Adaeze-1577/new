const numbers = [1, 2, 1000, 3, -1];
const maxNumber = numbers.reduce((max, current) => 
    current > max ? current : max, numbers[0]);

console.log(maxNumber); 
