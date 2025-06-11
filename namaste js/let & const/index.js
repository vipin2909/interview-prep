// below line gives an error that can't access a before initialization 
// console.log(a);
let a = 10;
var b = 100;
let c;
console.log(c);


// let s = 10;
// console.log(s);
// s = "something changed";
// console.log(s);

// const kl = 10;
// console.log(kl);
// kl = "190";
// console.log(kl);

// temporal deadzone
// without any value initialized to a we can't access a this phase is called temporal deadzone

// run this code in browser in global execution context and see the difference
// let stored in seprate memory space rather than global memory 


// without value is being assigned to a let variable we 
// can't use it any where above in the code this is called temporal dead zone
