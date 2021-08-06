var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var wellPacked = false;

// if (danishPrice < myBudget) {
//     console.log('I will eat danish.');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('I will eat butter ban with tea.');
// }
// else {
//     console.log('I will just have a cup of tea.');
// }


if (danishPrice < myBudget) {
    if (wellPacked == true) {
        console.log('I will eat danish.');
    }
    else {
        console.log('I cannot eat unhealthy things.');
    }
}