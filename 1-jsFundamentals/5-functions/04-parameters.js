// parameters -- for different inputted info; a bucket for different info in file
// parameter is just a placeholder variable for a value we do not know yet. Then when we call/invoke the function, we supply that value, and that is known as the argument

/* 

keyword: function
name: hi
parameters: (name) 

function hi() {
    console.log(`hi, ${name}`);
}

*/

function hi (name) {
    console.log(`hi, ${name}`);
}

hi("britt");


//challenge


function hi (firstName, lastName) {
    console.log(`hello, my name is ${firstName} ${lastName}`);
}

hi("brittany", "magee");