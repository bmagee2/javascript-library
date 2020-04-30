// methods

let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];

//just grab values-- for of loop
for(let foodItem of food) {
    console.log(foodItem);
}

//just grab keys-- for in loop
for(let foodItem in food) {
    console.log(foodItem);
}


let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];

food.push("pizza");

food.splice(1, 2, "tacos");

let removedFood = food.pop();
console.log(removedFood);

food.unshift("burritos");
console.log(food);