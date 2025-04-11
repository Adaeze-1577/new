//We have an arrray of numbers.
//We will iterate through the array and sum all numberS.


//TASK TWO
//Using an integer (positive or negative whole numbers) say a whole number
//We will print all the even numbers from 0 to that number.
//We will print all the odd numbers from 0 to that number.

//TASK THREE


//TASK FOUR
//FINDING FACTORIALS: 5!=5*4*3*2*1. USING LOOP, FIND 10!
//TASK FIVE
//IMPLEMENT A CODE USING FIBONACCI SEQUENCE AND DETERMINE WHICH NUMBR OF THE SEQUENCE IS A PRIME NUMBER.
//TASK SIX
//RESEARCH ABOUT NP PROBLEMS AND NP COMPLETE PROBLEMS.

// *****DAY TWO ASSIGNMENTS*****
//TASK ONE:WRITE A FIBONACCI CODE
//TASK TWO: IMPLEMENT A GRADING SYSTEM WITH THE FOLLOWING RANGES: 100-90 (A), 80-89(B), 70-79(C), 60-69(D), BELOW 60 (F)
let array = [
    8,6,2,4,11,16,26,5
]

let max = 0
for (let i= 0; i < array.length; i++) {
    if (max < array[i]) (
        max = array[i]
    )
}
console.log(max);