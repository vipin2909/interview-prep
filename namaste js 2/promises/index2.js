const cart = ["shoes", "jeans", "t-shirts"];

const promise = createOrder(cart); // orderId;

// console.log(promise);

promise.then(function(orderId) {
    console.log(orderId);
    return orderId;
    // proceedToPayment();
})
.then(function(orderId) {
   return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
})

// Producer
// the reject and resolve are passed by javascript to us 
// we will call reject with some error

// this is main part of promises
function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId

        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid!!");
            reject(err);
        }

        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000)
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successfull");
    })
}

function validateCart(cart) {
    return true;
}