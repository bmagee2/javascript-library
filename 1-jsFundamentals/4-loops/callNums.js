function callNums() {
    for (let x = 0; x <= 10; x++) {
        (x === 0) ? console.log("this number is even") : (x % 2 === 0) ? console.log("this number is even") : (x % 2 != 0) ? console.log("this number is odd") : ;
    }
}
callNums();
