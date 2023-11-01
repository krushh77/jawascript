var userage = 20

if (userage > 19){
    console.log("you are allowed for dl")
} else {
    console.log("you are not allowed for dl")
}

var userage = 10

if (userage > 19 && userage < 90){
    console.log("your age is greter than 19 and lesser than 90. you are allow")
} else {
    console.log("your age is might be lesser than 19 or more than 90.")
}



var userage = 19
if (userage > 19 && userage < 90){
    console.log("your are allowed")
} else if (userage < 19){
    console.log("you are under age.")
}else if (userage >= 90){
 console.log("you are greater than 90 or you are over age")
}else {
    console.log("you are allow for ll")
}

var material = "steel";

switch (material){
    case "steel":
        console.log("material is steel")
        break;
        case "copper":
            console.log("material is copper")
            break;
            case "plastic":
                console.log("material is plasti")
                break;
                default:
                    console.log("material is not defined")
                    break;
}


var myname
console.log("myname")
console.log(typeof(myname))


var mydata = ["krushnaral", 1234 ,"rushabh" , [1,2,3]]
console.log(mydata)
console.log(mydata.length)

console.log(mydata[1])

console.log(mydata[2])

console.log(mydata[3])

console.log(mydata[0])
console.log(mydata[3][0])

var students =["krushnaraj" , "rushabh" , "shabaz" ]

console.log(students)
students.push("xyz")
console.log(students)
 
students.pop()



 
