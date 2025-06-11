const clothingOptions = ["shirt", "jeans", "pants", "t-shirts", "trousers", "socks", "shoes"];

createOrder(clothingOptions)
.then((data) => {
    console.log("on this level some data is present!!")
    console.log(data)
    return data;
})
.then((data) => {
    console.log("this level doesn't get any data")
    console.log(data);
    return data;
})
.then(data => console.log(data))
.catch(err => console.log(err.message));



function createOrder(clothingOptions) {
    const promise = new Promise((resolve, reject) => {
        if(validateCart(clothingOptions)) {
            const orderId = "100";
            resolve(orderId);
        }
        else {
            const err = new Error("Something went wrong");
            reject(err);
        }
    });

    return promise;
}


function validateCart(clothingOptions) {
    return true;
}