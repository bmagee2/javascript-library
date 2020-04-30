//returns-- we can use info from a function outside of the function

let hi = () => {
    // 1
    return "hi";
}

//     2        3
let greeting = hi();

/*
1- keyword that brings our data out of our function
2- a new variable to hold the value of the return
3- when called, the function becomes the value of the return
*/

console.log(greeting);

//example

function name(firstName) {
    return `hello, ${firstName}`;
}

// concise version

let name = (firstName) => `hello, ${firstName}`;

let greetedName = name("b magee")

console.log(greetedName);


// example

function capName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

let correctName = capName("bmagee");

console.log(correctName);

// example

function areaOfRec(length, width) {
    let area = length * width;
    return area;
}

let newArea = areaOfRec(4,5);

console.log(newArea);


// challenge- tip calculator -- did on my own!

function calcForTip(billTotal, tipAmount) { 
    let total = billTotal * tipAmount;
    return total;
}

let tipTotal = "$" + calcForTip(10, 0.2);

console.log(tipTotal);