let counter = [2,4,6,8,10];
for (let i = 0; i < counter.length; i++) {
if (counter[i] <= 150) {
    console.log(counter[i])
   counter[i] *=3;
}
}
console.log(counter)