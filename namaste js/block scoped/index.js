{
    // Compound statement
    // var a = 10;
    // console.log(a);
}

// if(true) {
//     // group of multiple statements 
// }

// function a() {
//     var b = 10;
//     console.log("Line no. 13", b);
// }
// a();
// console.log(b);

var kl = 100;
var lk = 10;


// this thing is shadowing

{
    console.log("line 22", kl);
    var kl = 10000;
    let lk = 100;
    console.log("line 23", kl);
    console.log("line 24", lk);
}

console.log(lk);