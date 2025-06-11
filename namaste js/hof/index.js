function x() {
    console.log("Namaste JS");
}

// function y taking x function as its argument or parameter 
// y is higher order function and x is callback function
function y(x) {
    x();
}



// functional programming is heart of js

const radius = [3, 1, 2, 4];
// write a function to calculate area of the 4 circles given radius array of circles
const calculateArea = function(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculateArea(radius, area));



function area(radius) {
    return Math.PI * radius * radius; 
}


// DRY principle Don't repeat yourself


// function a() {
//     let p = 10;
//     function b() {
//         let q = 190;
//         var r = 900;
//         console.log(p, q, r);
//         p = 190190;
//         console.log(p, q, r);
//     }
//  r = 1908;
//     b();

//     console.log(p, r);
// }

// a();