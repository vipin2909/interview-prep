const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId) {
//   proceedToPayment(orderId);
// });

// but instead we can use promise
// we don't know how craeteOrder api will behave or some other person can alter this




// the below code till line 23 is far better than the above code from line 3 to 5
// const promise = createOrder(cart);

// {data: orderDetails}

// we can attach a callback function on promise object which is available on promises
// when this promise object gets data then the below then call back function gets executed 
// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// });


const GITHUB_API = "https://api.github.com/users/vipin2909";
const user = fetch(GITHUB_API);
console.log(user);



// promise is immutable and ha