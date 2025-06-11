// map filter and reduce are higher order function which accepts function as their argument 

// map code....
const arr = [1, 2, 3, 4, 5];
const output = arr.map((el) => el.toString(2));
console.log(output);


// filter code....
const oddNumber = arr.filter(el => el % 2);
console.log(oddNumber);
 

// reduce code....
const sumOfAllElements = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log("sum of all array elements are: ", sumOfAllElements);

const maxEle = arr.reduce((acc, curr) => {
    if(curr > acc) acc = curr;
    return acc;
}, 0);
console.log(maxEle);
// this zero is the initial value of the accumulator

const sum = arr.reduce((init, el) => el+init);
console.log(sum);