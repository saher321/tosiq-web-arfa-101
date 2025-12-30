// let, var, const

// var a = 10;
// var a = 20;
// variable will re-declared and re-initialized with same var name

// let a = 10;
// let a = 20;
// variable is not re-declared and but re-initialized with same var name

// const a = 10;
// variable is not re-declared or re-initialized

// console.log(a);

/// ********* function overloading ********

// greetings("Asad", "Evening");

// function greetings () {
    
// }
// function greetings (name) {
    
// }

// function greetings (name, timeOfDay) {
//     if (!name && !timeOfDay) return console.log("Simple function calling");

//     if (name && !timeOfDay) return console.log(`Hello ${name}`);
    
//     if (!name && timeOfDay) return console.log(`Good ${timeOfDay}`);

//     if (name && timeOfDay) return console.log(`Hello ${name}, Good ${timeOfDay}`);
// }


/// ************* CLASS ***************

class Cars {

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails () {
        console.log(`My car name is ${this.make} has model number is ${this.model}`)
    }
}

let c = new Cars("Toyota", 2007);

console.log(c.getDetails())











