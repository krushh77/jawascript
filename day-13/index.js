

 

var array = [1, 2, 3, 4]

console.log(array, "array")

var result = array.map((number) => number * 2)
console.log(result, "result")


var array = [2, 3, 4, 5];

array.forEach((number) => console.log(number * 2))
const array1 = [1, 2, 3, 4];


const initialValue = 10;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);


var list = ["abc", "awdiz", "rahul", "hi everyone", "welcome"];

var result = list.filter((str) => str.length < 8)

console.log(result,"result")


setTimeout(() => {
    console.log("Hii")
}, 5000)



setTimeout(() => {
    console.log("Hii")
    console.log("Hello")
}, 3000)

var counter = 0;
const message = setInterval(() => {
    counter++;
    console.log(counter)
}, 1000)

clearInterval(message)