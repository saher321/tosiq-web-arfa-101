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

class Toyota extends Cars {

    constructor(make, model, variant) {
        super(make, model)
        this.variant = variant;
    }

    getDetails () {
        console.log(`My car name is ${this.make} has model number is ${this.model + 1} with the variant of ${this.variant}`);     
    }
}

// let c = new Cars("Toyota", 2007);
// console.log(c.getDetails())

let t = new Toyota("Toyota Camry", 2007, "2.0cc");
console.log(t.getDetails())












