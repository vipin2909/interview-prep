console.log("start");

setTimeout(function() {
    console.log("Callback");
}, 5000);

fetch("https://api.netflix.com").then(function cb() {
    console.log("CB Netflix");
})

console.log("End");
let b = 20;
{
    var a = 10;
    // var b = 1000;
    let b = 10000;
    console.log(a, b);
}
console.log(a, b);