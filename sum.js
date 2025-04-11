let array =[2,6,8,9,12,90,11,33,42,87]
let result = 0;
for (let i = 0; i <= array.length -1; i++) {
    console.log("The initial value of the array is: ", result);
    result += array[i];
    console.log("The final value of result is: ", result);
}