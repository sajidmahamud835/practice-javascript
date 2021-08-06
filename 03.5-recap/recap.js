// 1. varible
var favoriteBook = '4 hour work week';

// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Stroy Brand';

bookList.push('Samll Giants');
bookList.pop();

// 3. conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}
// 4. Loop
//while loop
var i = 0; // loop variable
while (i < 15) {
    console.log(i);
    i++;
}

// for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}