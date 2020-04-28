let weather = 72;

if (weather < 70) {
    console.log("wear a jacket");
} else {
    console.log("no jacket required");
}

//challenge

let name = "brittany";

if (name = false) {
    console.log('<name>');
} else {
    console.log('hello, what is your name?');
}

let myName = "brittany";

if (myName) {
    console.log('hello, my name is <myName>');
} else {
    console.log('hello, is your name <name here>?');
}

//solution

let name = "brittany";

if (name == "brittany") {
    console.log(name);
} else {
    console.log("hello, what is your name?");
}

let name = "brad";

if (name == "brittany") {
    console.log(`hello, my name is ${name}`);
} else {
    console.log("hello, is your name " + name +"?");
}


//challenge 2

let name = "zAchARy"

if (name[0] === name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey, this isn't written correctly");
}


if (name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}


if (name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}


//else if challenge

let age = 12;

if (age >= 25) {
    console.log("you can rent a car");
} else if (age >= 21) {
    console.log("you can drink");
} else if (age >= 18) {
    console.log("you can votek");
} else {
    console.log("sorry, you're too young");
} 