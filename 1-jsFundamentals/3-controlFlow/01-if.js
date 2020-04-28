/*
falsy values:
1. false
2. 0
3. "", '', ``
4. null
5. undefined
6. NaN

*/

let isOn = true;

if (isOn == true) {
    console.log("light is on!");
}

//OR

if (isOn) {
    console.log("light is on!");
}

if (isOn == false) {
    console.log("light is off");
}


let weather = 60;

if (weather < 70) {
    console.log("wear a jacket");
}