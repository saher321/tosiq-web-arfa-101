// var list2 = [3,5,112,67,42225,774,213,76,98,-6];
//  index:     0         1          2           3       4
var list = ["Orange", "Apple", "Vegetables", "Lahore", "Shoes"];
// list.push("T-shirt");
// list.unshift("Tiger");
// list.sort();
console.log(list);
// console.log(list.filter((item)=> item == "Apple" )) // searching
var listTag = document.getElementById("list");
// console.log(list.length);
// console.log(list[3]);
//              3        4
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
  listTag.innerHTML += "<option>" + list[i] + "</option>"; // + means append value
}
// dry run;
// i = 0 => list[i] = Orange
// i = 1 => list[i] = Apple
// i = 2 => list[i] = Vegetables
// i = 3 => list[i] = Lahore
