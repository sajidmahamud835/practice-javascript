var bookPages = ['html', 'css', 'javascript', 'react'];

var cssIndex = bookPages.indexOf('css');
console.log(cssIndex);

var numbers = [45, 98, 65, 73, 53];
var index = numbers.indexOf(65); //get index no by value
console.log(index);

var index = numbers.indexOf(undefined); //index of somthing that is not in the array will result -1
// console.log(index);


var secondIndex = bookPages[2]; //get value by index
// console.log(secondIndex);

numbers[1] = 95; //replace value by index
numbers[2] = 21;
console.log(numbers);