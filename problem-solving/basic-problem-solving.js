// problem 1 - seerToMon convertor function
// (40 seer = 1 mon)

function seerToMon(seer) {

    // input validation
    if (typeof seer != "number") {
        return 'Invalid input. Your input must be a number.';
    }
    else if (seer < 0) {
        return 'Invalid input. Seer cannot be a negitive number.';
    }

    // convertor
    const mon = seer / 40;

    return mon;
}

// problem 2 - totalSales counter function
// (shirtPrice = 100TK, pantPrice = 200TK, shoePrice= 500TK)

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // input validation
    if ((typeof shirtQuantity != "number") || (typeof pantQuantity != "number") || (typeof shoeQuantity != "number")) {
        return 'Invalid input. Your input must be a number.';
    }
    else if ((shirtQuantity < 0) || (pantQuantity < 0) || (shoeQuantity < 0)) {
        return 'Invalid input. Price cannot be a negitive number.';
    }

    // item price value
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    // sales calcualtor
    const totalShirtPrice = shirtPrice * shirtQuantity;
    const totalPantPrice = pantPrice * pantQuantity;
    const totalShoePrice = shoePrice * shoeQuantity;

    const totalSalesValue = totalShirtPrice + totalPantPrice + totalShoePrice; //total sales value

    return totalSalesValue;
}

// probelm 3 - deliveryCost calculator function
// (deliveryCostPerItem for 1st 100 item = 200TK, for 2nd 100 item = 80TK, 3rd 100 item or more = 50TK cost.)

function deliveryCost(quantity) {
    // input validation
    if (typeof (quantity) != "number") {
        return 'Invalid input. Your input must be a number.';
    }
    else if (quantity < 0) {
        return 'Invalid input. Quantity cannot be a negitive number.';
    }

    //delivery charges
    const deliveryCostFirst100 = 100;
    const deliveryCostSecond100 = 80;
    const deliveryCostThird100plus = 50;

    // delivery cost calculator
    if (quantity <= 100) {

        let deliveryCostValue = quantity * deliveryCostFirst100;

        return deliveryCostValue;
    }
    else if ((quantity > 100) && (quantity <= 200)) {

        let deliveryCostValue = 100 * deliveryCostFirst100;
        deliveryCostValue = deliveryCostValue + ((quantity - 100) * deliveryCostSecond100);

        return deliveryCostValue;
    }
    else {
        let deliveryCostValue = 100 * deliveryCostFirst100;
        deliveryCostValue = deliveryCostValue + (100 * deliveryCostSecond100);
        deliveryCostValue = deliveryCostValue + ((quantity - 200) * deliveryCostThird100plus);

        return deliveryCostValue;
    }
}

// problem 4 - perfectFriend finder function 
// (1st one who has 5 cherecters in his/her name is the perfectFriend)

function perfectFriend(friendNames) {
    for (let i = 0; i < friendNames.length; i++) {
        if ((friendNames[i].length == 5) && (typeof friendNames[i] == "string")) { //also checks if the type is string
            const perfectDude = friendNames[i];
            return perfectDude;
        }
    }
    return 'No perfect friend found.'
}


// testing output

// console.log(seerToMon(40)); // output should be 1
// console.log(seerToMon(-40)); // output should be an invalid message
// console.log(seerToMon(40.50)); //output should be 1.0125
// console.log(seerToMon(5045)); //output should be 126.125
// console.log(seerToMon('me')); // output should be an invalid message

// console.log(totalSales(10, 25, 28)); // output should be 20000
// console.log(totalSales(10, 25, -28)); // output should be an invalid message.
// console.log(totalSales(0, 0, 0)); // output should be 0.
// console.log(totalSales(true, 25, 28)); // output should be an invalid message.
// console.log(totalSales(10, 'fifty', 28)); // output should be an invalid message.


// console.log(deliveryCost(10)); //output should be 1000
// console.log(deliveryCost(110)); //output should be 10800
// console.log(deliveryCost(10)); //output should be 1000
// console.log(deliveryCost("free")); //output should be an invalid message.
// console.log(deliveryCost(-100)); //output should be an invalid message.

// let friends = ['saju', 'galu', 'omor', 'rakib'];
// console.log(perfectFriend(friends)); //output should be rakib
// let fakeFriends = ['saju', 'galu', 'omor', '0'];
// console.log(perfectFriend(fakeFriends)); //output should be 'not found'.
// console.log(perfectFriend(['Sajid', 'Galib', 'Mahir', 'Isr'])); //output should be sajid