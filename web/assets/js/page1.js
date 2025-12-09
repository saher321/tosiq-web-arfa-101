// 

// number : 123344
// string : "Ahmad", 'A'
// float : 23.45
// array : [] => var names = ["Fruits", "Vegetables", "Sports"];
// alert(names[1])

// object: {} => var user = { name: "John", age: 23 }
// alert(user.name, user.age)
// null, undefined
// 
// var a = 10; var b=20;
// var show = "" + (a+b) === a+b;
// console.log(show)

var english     = (parseInt(prompt("Enter marks english")));
var urdu        = (parseInt(prompt("Enter marks urdu")));
var computer    = (parseInt(prompt("Enter marks computer")));
var total_marks = 300;
var avg         = 0;

avg = (english + urdu + computer) / 3;
console.log(avg.toFixed(2));
