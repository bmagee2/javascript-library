//iterating arrays -- acts like a for Of method, for Each method

let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

// for Each method-- concise way to run forOf method (above)
let food = ["pecan pie", "shrimp", "quesadilla", "cheese cake", "hotdog"];

food.forEach(foodItem => console.log(foodItem));

//list items with number-- 1 shrimp
food.forEach((foodItem, i) => console.log(i, foodItem));


//challenge

let movies = ["billy madison", "clifford", "happy gilmore", "bridesmaids"];

movies.push("reno 911");

movies.splice(0, 1, "ace ventura: pet detective");

movies.forEach((movie, i) => console.log(i, movie));


