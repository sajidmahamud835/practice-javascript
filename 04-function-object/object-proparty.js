var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel i5',
};
// set a object proparty value
computer.price = 22000;
console.log(computer);
var price = computer.price; //1st way
console.log(price)
var priceProperty = "price"; //3rd way
computer[priceProperty] = 19000;
// computer["price"] = 45645; // 2nd way
console.log(computer.price);
console.log(computer.processor);

console.log(computer);