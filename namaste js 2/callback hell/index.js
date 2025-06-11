const cart = ["shoes", "pants", "kurta"];

// this is callback hell 
// structure is known as pyramid of doom 
api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet();
        });
    });
})


// inversion of control 
// another problem of using callback functions