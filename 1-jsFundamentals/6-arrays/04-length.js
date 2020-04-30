//

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);


//challenge

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors instanceof Array);

colors.reverse();
console.log(colors);

colors.forEach(color => console.log(color));

// CONDITIONAL- ternary
(colors instanceof Array) ? console.log(colors.reverse()) : console.log("not an array"); colors.forEach(color => console.log(color));


// if an array
let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

if (colors instanceof Array) {
    let newArr = colors.reverse();
    newArr.forEach(color => console.log(color));
} else {
    console.log("not an array");
}


// challenge
let colors = ["BlUe", "grEeN", "yElLoW", "REd", "oRanGe", "pURPle"];

colors.forEach(color => console.log(color[0].toUpperCase() + color.slice(1).toLowerCase()));


//BODY BLOCK
let colors = ["BlUe", "grEeN", "yElLoW", "REd", "oRanGe", "pURPle"];

colors.forEach(color => {
    let newColor = color[0].toUpperCase() + color.slice(1).toLowerCase();
    console.log(newColor);
});