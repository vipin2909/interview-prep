/**
 * what is async ? 
 * what is await ?
 * how async await works behind the scenes
 * examples of using async await
 * error handling
 * interviews
 * async await vs promise.then/.catch
 * 
 */

// always returns a promise
// either we return a promise from the function or this function will wrap the value we are returning
// inside a promise and then return a promise automatically

async function getData() {
    return "namaste js"
}

// const dataPromise = getData();
// console.log(data);
// dataPromise.then(res => console.log(res));



const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value !!");
    }, 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value !!");
    }, 5000);
})

// JS Engine Will Wait for promise to be resolved at await line before moving onto console.log line 
// console.log("Namaste Javascript!!");
async function handlePromise() {
    console.log("hello world ")
    const val = await p;
    console.log("Namaste Javascript!!");
    console.log(val);


    const val2  = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);
}

handlePromise();
// const valueOfHandlePromise = handlePromise();
// console.log(valueOfHandlePromise, " line no. 36");

// valueOfHandlePromise.then(res => console.log(res));