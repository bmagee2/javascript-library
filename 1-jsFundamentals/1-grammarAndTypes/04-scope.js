let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);


let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

var x = 12;

function varTest() {
    var x = 33;
    if (true) {                 // if () is a conditional
        var x = 45;
        console.log(x);
    }           
    console.log(x);
}

varTest();
console.log(x);


/*
Var is scoped to the nearest function block, meaning it looks for a functions curly braces and scopes to the nearest one, if it is not inside curly braces it is made a global variable

It wont leak out of the function block, but if you have nested code blocks in your function. they can leak out of that code block into the functions 
*/