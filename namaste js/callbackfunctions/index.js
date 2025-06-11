// what is a callback function in js
setTimeout(function() {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
})
// js is synchronous and single threaded language 

// blocking the main thread

// Power of callbacks ? 

// Deep about event listeners

// Closures demo with event listeners

// Scope demo with event listeners 

// Garbage collection and removeEventListeners


document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("button gets clicked!!!");
})


// https://www.amazon.in/BHARAT-SAARTHI-Petrol-Engine-Multipurpose/dp/B0DV5MDV1V?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A9ONQ5DZ4FLTT