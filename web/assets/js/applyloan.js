function applyloan () {
    var age = 20;
    var income = 30000;

    var userAge = parseInt(prompt("Enter age"));
    
    if (userAge >= age) {
        var userIncome = parseInt(prompt("Enter income"));
        if (userIncome >= income) {
            console.log("You are eligible for loan")
        } else {
            console.log("You aren't eligible for loan")
        }
    } else {
        console.log("You are age is below")
    }
}
