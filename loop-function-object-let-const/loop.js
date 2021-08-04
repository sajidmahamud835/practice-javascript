// // loop
// var condition = true;
// var cicrleIndex = 0;
// while (condition) {
//     if (cicrleIndex >= 1000) {
//         condition = false;
//     }
//     console.log('Number of loop' + ' ' + cicrleIndex)
//     cicrleIndex++;
// }

// var i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// for (var i = 0; i <= 5; i++) {
//     console.log(i);
// }

// for (var i = 5; i >= 0; i--) {
//     console.log(i);
// }

var num = parseInt(Math.random() * 5);
while (num >= 3) {
    console.log(num);
    num = parseInt(Math.random() * 5);
}