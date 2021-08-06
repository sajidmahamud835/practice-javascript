// kilometer to meter

function kmToMeter(km) {
    if (km < 0) {
        return "Input valid number."
    }
    var meter = km * 1000;
    return meter;
}

var result = kmToMeter(-4);

console.log(result);

//Task create leep year function.