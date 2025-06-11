// promise.all() use case
for(let i = 1; i < 10; i++) {
    setTimeout(() => console.log(`${i} secs`), i*1000);
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1"), 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2"), 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3"), 1000);
})


Promise.all([p1, p2, p3]).then((res) => {
    console.log(res[1]);
})