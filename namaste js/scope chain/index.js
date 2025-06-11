function a() {
    // console.log(b);

    function c() {
        console.log(b);
    }
    c();
}
// first js tries to find value of b in local execuion context of function a
// then it moves to global execution context of b
var b = 10;
a();