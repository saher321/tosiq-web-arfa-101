function add (a,b) {
    var type = typeof a;
    console.log(type)
    if (type == 'string')
        return "Error: Can not add string to number";
    return a + b;
}

function divide (a,b) {
    if (b == 0)
        return "Param B is division by 0"
    return a / b;
}

function subtraction (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}