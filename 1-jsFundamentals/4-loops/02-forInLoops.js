// for in loops

let student = {
    name: "pete",
    awesome: true,
    degree: "javascript",
    week: 1
}

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "shorthair", "longhair", "burmese"];

for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}


//challenge

let name = "brItTany";
let capName;

for (let l in name) {
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);
