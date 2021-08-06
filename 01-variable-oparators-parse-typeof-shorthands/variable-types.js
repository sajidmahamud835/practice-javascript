var tShirtPrice = 200;
// Check type of variable
console.log(typeof tShirtPrice);
var pantPrice = '300';
console.log(typeof pantPrice);
var isRaining = true;
console.log(typeof isRaining);

var isRomantic; //undifined
console.log(typeof isRomantic);

// search javascript data types

//date

var today = new Date();
console.log(today);
console.log(typeof today);

// sepcial edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1); //fix the langth of the float
console.log(typeof total); //type is string now
total = parseFloat(total); // convert to float
console.log(total);
console.log(typeof total); //type is float now
