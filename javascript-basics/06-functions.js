function numberEntered(num){
    console.log("The number you entered was: ", num);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

function add(x, y){
    let sum = x + y;
    return sum; // Or return x + y;
}
console.log(add(1,1));

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("b", "magee"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));

//1        //2
function hello() {
    //3
    console.log("Hello World!");
}

hello();

function letsdothis() {
    console.log("hello world!");
}

letsdothis();