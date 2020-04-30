//arrow functions -- a more concise way to write functions


/*
(variable)    (fat arrow)
  let hi   = ()    =>    {

}

*/

//BLOCK body = anything between curly braces, can do MULTIPLE things
let hi = () => {
    console.log("hi");
}
/*
note: block body arrow functions must have a return (if you want to get info back) in the body of the function-- return must be between the curly braces
*/

//CONCISE body -- you can only do ONE thing
let hi = () => console.log("hi");

//single parameter
let greeting = name => {
    console.log(`greetings, ${name}`);
}

greeting("b");

//multiple parameters
let greeting = (firstName, lastName) => {
    console.log(`greetings, ${firstName} ${lastName}`);
}

greeting("b", "magee");