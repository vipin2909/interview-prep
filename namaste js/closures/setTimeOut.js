// function x() {
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);

//     console.log("Namaste Javascript!!");
// }
// x();


function ab() {
    // if we change var to let it will print 1 2 3 4 5 
    // and in case of var it will print 6 6 6 6 6
    // because var stores reference to 
    for(var i = 1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    console.log("JavaScript");
}

ab();



// how to print value using var from 1 2 3 4 5 
function ba() {
    for(var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
}
ba();