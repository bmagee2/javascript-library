//  (1)   (2)   (3)
let list = ["item1",  "item2",  "item3"];

/*

1- variable name holding array
2- square brackets
3- each item in array must be separated by a comma

*/


let fruit = ["orange",  "banana",  "apple"];
console.log(fruit[0]);


let students = [
    "Mitch",  
    "Bill",  
    "Brittany",
    23,
    true,
    ["Hustin", "Amanda", "John", [20, true, "Slayde"]]
]    

console.log(students instanceof Array);
console.log(students[5][1]);
console.log(students[5][3][2]);