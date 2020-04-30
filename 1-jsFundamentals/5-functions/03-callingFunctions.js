// 

function hi() {
    console.log("hi");
}

hi();
console.log(hi());      //can console.log functions but this is undefined



//challenge

function callNums() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

callNums();

//challenge -- i got it on my own!

let arr = ["this", "is", "really", "cool"];

function  call() {
    for (let item of arr) {
        console.log(item);
    }
}

call();
