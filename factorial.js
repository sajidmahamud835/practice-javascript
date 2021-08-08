// function factorial(num) {
//     if (typeof (num) != "number") {
//         return 'You need to input a number to know its factorial';
//     }
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// function getFactorial(num) {
//     if (typeof (num) != "number") {
//         return 'You need to input a number to know its factorial';
//     }
//     let factorial = 1;
//     let i = num;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

function getFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

console.log(getFactorial(0));


