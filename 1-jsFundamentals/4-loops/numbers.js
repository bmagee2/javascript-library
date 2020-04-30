function numbers() {
    for (let x = 0; x <= 100; x++) {
        (x % 3 === 0 && x % 5 === 0) ? console.log("FizzBuzz") :
            (x % 5 === 0) ? console.log("Buzz") : (x % 3 === 0) ? console.log("Fizz") : console.log(x);
    }
}
numbers();
