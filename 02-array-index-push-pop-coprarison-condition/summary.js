var tableLength = 12;
var tourDestinations = ['kuakata', 'cittagong', 'sundarbans', 'New York'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];

tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1] == 'cittagong') {
    console.log('I will claim hills');
}
else if (tourDestinations.length == 4) {
    console.log('I got more money, so I will travel more.');
}
else {
    console.log('I will visite middle of nowhare')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('I will eat egg.');
}