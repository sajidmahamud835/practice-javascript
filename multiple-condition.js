var gotJob = true;
var moneySaved = 150000;
var ownFlat = true;
var hasHouse = true;

// if (gotJob == true) {
//     console.log('Lets get married!')
// }
// else {
//     console.log('You cannot marry now!')
// }

// if (gotJob == true && moneySaved > 200000) {
//     console.log('Lets get married!')
// }
// else {
//     console.log('You cannot marry now!')
// }

// if (gotJob == true && moneySaved > 200000 && ownFlat == true) {
//     console.log('Lets get married!')
// }
// else {
//     console.log('You cannot marry now!')
// }

// if (gotJob == true || moneySaved > 200000 && ownFlat == true) {
//     console.log('Lets get married!')
// }
// else {
//     console.log('You cannot marry now!')
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Lets get married!')
}
else {
    console.log('You cannot marry now!')
}