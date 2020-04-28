//data types

//Boolean -- has 2 values: true or false
    //it's like an on/off switch

let on = true;
console.log(on);

let off = false;

//Null -- is an empty value. think of it as an empty container- it still exists as a space to fill. An intentional empty value.

let empty = null;
console.log(empty);

//Undefined -- default value when a variable is not initialized. Unlike Null, it's not meant to be left empty.

let undef = undefined;
let correct;

console.log(undef, correct);


//Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //will automatically round numbers at 16 characters
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");    //Number Class Constructor
console.log(typeof aNumber);    //typeof tells you what type of data type it is

//Strings -- strings are data types used to represent text and can either and are either wrapped in single quotes (''), double quotes (" ") or string interpalation (``)

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100"
console.log(typeof first);
console.log(typeof second);

let third = 1050 + "100";
console.log(third);

//Objects -- objects are used to store many values instead of a single value

let frodo = {         //objects always use brackets
    race: "hobbit",  //assigning variable name and value inside brackets
    rings: 1,
    cloak: true,
} 
console.log(frodo);

console.log(typeof frodo);

//Arrays -- arrays are containers that hold lists of items
/*

    let list = [    "item1",    "item2",    "item3"];
        (1)   (2)         (3)

        1- name of array
        2- arrays are denoted by square brackets
        3- each value is separated by a comma
*/

let burritos = ["large", 4, true];  //can hold different types of data
console.log(burritos);
console.log(typeof burritos);       //arrays are actually objects


//Challenge:

let firstName = "Brittany";
let lastName = "Magee";
let houseNumber = 434;
let street = "Wellington Ave";
let city = "Chicago";
let state = "IL";
let zipcode = 60657;

console.log(firstName + " " + lastName + "," + houseNumber + " " + street + " " + city + "," + state + " " + zipcode);

console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${city}, ${state} ${zipcode}`);

// Methods

let myName = "Brittany";
console.log(myName.length);     //length method on strings to count characters

console.log(myName.toUpperCase());  //uppercase method, built-in function

let home = "My home is Indy";
console.log(home.includes("Indy"));


// Challenge: 

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));