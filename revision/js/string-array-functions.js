//  Un comment to view result of strings data

// let str1 = "Hello world"
// let str2 = "Hello world this is My First Coding";


// let printSubString = str2.split(" ");
// console.log(printSubString)
// console.log("Extracting text from string2:", printSubString[6])
// // output: hello_world_this_is_my_first_coding

// console.log("Lenght of string: ", str1.length)

// console.log('Find index:', str1.indexOf("H"))
// console.log('Find character:', str1.charAt(4))

// let slug = str1.replace(" ", "_").toLowerCase()
// console.log("Slug of string:", slug);


// let slug2 = str2.replaceAll(" ", "_").toLowerCase()
// console.log("Slug2 of string:", slug2);

// let text = "9";
// let result = text.padStart(3, "$");
// let result2 = text.padEnd(2, "0");

// console.log("Adding text from start:", result)
// console.log("Adding text from end:", result2)


// let mystrbeforeTrim = "     This is my book";
// let afterTrim = mystrbeforeTrim.trim();
// console.log( "Lenght before triming:", mystrbeforeTrim.length)
// console.log( "Lenght after triming:", afterTrim.length)

// ----------------------------------------------

// ARRAYS

const colors = [ "Pink", "Black", "Mehroon", "White" ];
colors.shift()

console.log("Colors length:", colors.length)
console.log("Colors:", colors);

const cities = [ "Lahore", "Sargodha", "Islamabad" ]
cities.splice(1, 1, "Faisalabad")
cities.pop()
// const newArray = colors.concat(cities)
const newArray = [ ...colors, ...cities, "Pakistan" ]

newArray.unshift("Starting Value")

newArray.push("Last value")

console.log("Third array:", newArray);

const counting = "1, 4, 6, 87, 90"
let findArray = Array.isArray(counting)

console.log("Checking array:", findArray)

let flatArray = [[12,34], [56, 78], [90, 100]]

console.log(flatArray.flat())