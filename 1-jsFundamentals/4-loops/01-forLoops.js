//loops -- to do something repeatedly until condition/default is met

let i = 7;

//   (1)    (2)   (3)
for (i = 0; i < 10; i++) {     //i++ = i + 1
    console.log(i);
}

//solution: stops running once it reaches 9 because 10 is not < than 10
/*

1- initial expression - run once before loop starts
2- condition - loop runs until condition evaluates to false
3- increment expression - runs once after each iteration of the loop

*/


//challenge

for (let x = 0; x <= 20; x += 2) {
    console.log(x);
}

//challenge
for (let x = 10; x >= 0; x--) {
    console.log(x);
}

//challenge
for (let x = 0; x >= -24; x -= 2) {
    console.log(x);
}

//challenge
let name = "brittany";

for (let x = 0; x < name.length; x++) {
    console.log(name[x]);
}

//challenge

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;       //sum = sum + i
}

console.log(sum)

//repl loops and functions assignment

//step 1 
for (let x = 0; x <= 10; x++) {
    console.log(x);
}

//step 2
function callNums() {
    for (let x = 0; x <= 10; x++) {
        console.log(x);
    }
}

callNums();

/*step 3 (part 1: started with this)

let zeroToTen = ["this number is even", "this number is odd", "this number is even", "this number is odd", "this number is even ", "this number is odd",  "this number is even", "this number is odd", "this number is even", "this number is odd", "this number is even"];

function callNums() {
    for (let x = 0; x <= 10; x++) {
        if (x === 0) {
            console.log(x);
            console.log(zeroToTen[x]);
        } else if (x % 2 === 0) {
            console.log(x);
            console.log(zeroToTen[x]);
        } else {
            console.log(x);
            console.log(zeroToTen[x]);
        }
    }
}

callNums();
*/

//step 3 (part 2: ended with this)

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function callNums() {
    for (let x = 0; x <= 10; x++) {
        (x === 0 || x % 2 === 0) ? console.log(numbers[x]) + console.log("this number is even") : console.log(numbers[x]) + console.log("this number is odd");
    }
}
callNums();



let x = 0; x <= 10; x++;
(x === 0 || x % 2 === 0) ? console.log(zeroToTen[x]) console.log("this number is even") : console.log(zeroToTen[x]) console.log("this number is odd");

let num = 6;
(num > 0) ? console.log("yes") : console.log("no");

var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';

console.log(canDrive);

let catArray = ["tabby", "shorthair", "longhair", "burmese"];

for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}


let name = "brItTany";
let capName;

for (let l in name) {
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);