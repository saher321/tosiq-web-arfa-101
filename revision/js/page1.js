var a=10

let b=10

const isAdmin = true


var a = 20;

// var :: redeclare, re-assign
// let :: re-assign
// const:: neighter redeclare nor re-assign

const coupen_codes = [
    { "code1" : 3},
    { "code2" : 2.6},
    { "code3" : 5},
]

let purchasedAmount = 9570
const disc = 3;
if (purchasedAmount >= 10000){
    let discValue = purchasedAmount /100 * disc

    let newPrice = purchasedAmount - discValue

    console.log("Price after discount of 3% is:", newPrice)
} else {
    console.log("Amount to be pay is:", purchasedAmount)
}