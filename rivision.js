//function declaration
// way 1
function add() {
    return 1 + 2;
}

//error
// way 2
let addition = function () {
    return 1 + 2; //if we do not tell return it will show undifined
} // error
//problem


// function paramitar
function add(num1, num2) {
    return num1 + num2; //num1 adn num 2 are paramiters.
}
//or
function add(num1, num2) {
    const sum = num1 + num2; //const 
    return sum;
}

//funtion argument
let a = add(1, 3) //1 and 3 are called argument.

//function invoking
// all functions can be called in variable

let addFromVariable = add; //calling function as a varible
console.log(add); //this will show the type of the element

console.log(add(10, 20));
console.log(addFromVariable(30, 20));


// // The common problem we made
// function name wrong
// forget to add return


// conditonal logic
function canDrive(age) {
    //validation
    if ((age < 0)) {
        return 'Your input is worng. Please try agin.'
    }
    if (age >= 18) {
        return 'Yes, You can drive.'
    } else {
        return "No, you can not drive."
    }
}
console.log(canDrive(-18));

// for loop

//Problem write a function that show total sum value of all array paramiter.
// [12, 14, 16]
// access first index - 12
// access second index - 14
// sum 12 + 14
// access third index -16
// sum 12 + 14 + 16
function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

var money = [200 + 400 + 100 + 300];
console.log(arraySum(money));

// //problem mini max
// // [1, 4, 5, 8, 10]
// function miniMax(arr) {
//     for()
// }


//problem tinyFriend
function tinyFriend(arr) {
    let tiny = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (tiny.length > item.length) {
            tiny = item;
        }
    }
    return tiny;
}
console.log(tinyFriend(['Sajid', 'Galib', 'Mahir', 'Isr']));

// function largeFriend(arr) {
//     let large = arr[0];
//     for (const item of arr) {
//         const item = arr[i];
//         if (large.length < item.length) {
//             large = item;
//         }
//     }
//     return large;
// }
// console.log(largeFriend(['Sajid', 'Galib', 'Mahir', 'Isr']));


function kilometerToMeter(km) {
    if (km < 0) {
        return 'Invalid input.'
    }
    meter = km * 1000;
    return meter
}

console.log(kilometerToMeter(2));

// Assingment rules
// Function name should be exact same as told.
// Every function must have return statement.
// You can use input validation
// You shoud check the function if its not running.
// Should be no syntex error

// wash your recursion with this video-- https://www.youtube.com/watch?v=oNI6kwQsrl8


// Practice using hackerrank.com