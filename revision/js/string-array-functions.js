let str1 = "Hello world"
let str2 = "Hello world this is My First Coding";


let printSubString = str2.split(" ");
console.log(printSubString)
console.log("Extracting text from string2:", printSubString[6])
// output: hello_world_this_is_my_first_coding

console.log("Lenght of string: ", str1.length)

console.log('Find index:', str1.indexOf("H"))
console.log('Find character:', str1.charAt(4))

let slug = str1.replace(" ", "_").toLowerCase()
console.log("Slug of string:", slug);


let slug2 = str2.replaceAll(" ", "_").toLowerCase()
console.log("Slug2 of string:", slug2);

let text = "9";
let result = text.padStart(3, "$");
let result2 = text.padEnd(2, "0");

console.log("Adding text from start:", result)
console.log("Adding text from end:", result2)


let mystrbeforeTrim = "     This is my book";
let afterTrim = mystrbeforeTrim.trim();
console.log( "Lenght before triming:", mystrbeforeTrim.length)
console.log( "Lenght after triming:", afterTrim.length)