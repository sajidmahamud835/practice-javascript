var bottoleColor = "red"; //strings will always in '' or ""
var waterQuantity = 1;
var isFull = false;

//array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.indexOf('logens'); //-1
items.push('envelop');
items.push('watch');
items.pop();

// conditionals
if (items.length == 4) {
    console.log('You only have four items in your table.');
}
else if (items.length >= 4) {
    console.log('You have too many stuff in your desk.');
}
else {
    console.log('WOW! You have a clean desk.');
}


// loop
// var keepLoop = true;
// var cycaleIndex = 0;
// while (keepLoop) {
//     console.log('Cycle Index:' + ' ' + cycaleIndex);
//     cycaleIndex++;
//     if (cycaleIndex == 500) {
//         keepLoop = false;
//     }
// }

// for (cycaleIndex = 0; cycaleIndex <= 500; cycaleIndex++) {
//     console.log('Cycle Index:' + ' ' + cycaleIndex);
// }