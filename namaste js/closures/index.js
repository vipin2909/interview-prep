function a() {
    var x = 100;
    function b() {
        console.log(x);
    }
    x = 1000;
    return b;
}

var y = a();
console.log(y);
y();