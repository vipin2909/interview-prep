// Function Statement
a();
function a() {
    console.log("a called");
}

// Function Expression
b();
var b = function() {
    console.log("b called");
}

// Function Declaration same as function statement

// Anonymous Function
// function() {
    // anonymous funtions has no name
    // Syntax Error: Funtion statement requires a function name
// }

// Named Function Expression
var c = function xyz() {
    console.log("c called");
}

// Difference between parameters and arguments

// First class functions 
// the ability to use functions as values are first class functions
// e.g we can pass a function as an argument to other function


// Arrow functions