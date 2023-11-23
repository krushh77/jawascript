var mydata = { name: "krushnaraj", myage: 24 , studentslist:["rahul", "mahesh", "rohit"], anything: true, mytest:{hii:"hello"}}
console.log(mydata.name)
console.log(mydata.myage)
console.log(mydata.studentslist)
console.log(mydata.anything)
console.log(mydata.mytest)


var myObject = {};
myObject["name"] = "krushnaraj"
myObject["age"] = 24
myObject["iscompletedassignment"] = true
console.log(myObject)


const numbers = [0,,2,3,3,4,4,4,0,0,5,6,6,5]

let temp = {};

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] in temp){
        temp[numbers[i]] += 1;

    } else {
        temp[numbers[i]]=1;
    }
}
console.log(temp)
console.log(Object.keys(temp))