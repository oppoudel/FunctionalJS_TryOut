const array = [4, 5, 6, 7, 8];
let singleVal = 0;

singleVal = array.reduce((a, b) => {
    return a + b;
}, singleVal);
console.log(singleVal);