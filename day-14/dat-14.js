function outerFunction(){
    const myname = "krushna";
    function innerFunction(){
        return 'hello everyone, im ${nabjb}..';
    }
    return innerFunction();
}
var result = outerFunction();
console.log(result)

console.log("starting")

setTimeout(() => {
    console.log("sto")
}, 0)
console.log("ending")




// Promise.resolve((data) =>{
//     console.log(data)
// }).rejct((error) => {
//     console.log(error)
// })
// console.log("start")

// Promise.resolve().then(() => {
//     console.log("promise")
// })
// console.log("end")



console.log("start")
setTimeout(() =>{
    console.log("st")
},0)
Promise.resolve().then(() =>{
    console.log("promise")
})
console.log("end")