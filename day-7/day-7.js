var array = [1,2,3,4,5,6,7,8,9]

var target = 20;
for (var i= 0 ; i < array.length - 2;  i++) {
    for (var j = i + 1; j < array.length - 1; j++){
    for (var k = j + 1; k < array.length; k++){
        if (array[i]+array[j]+array[k]== target) {
            console.log([i,j,k])
        }
    }
}
}
function kuchbhi(){
    console.log("krushnaraj dipak dawande")
}
kuchbhi()
kuchbhi()
kuchbhi()
kuchbhi()

function even (){
console.log("number is even")
}
function odd (){
console.log("number is odd")
}

var number = 87654;

if (number%2 == 0){
    even()
} else {
    (odd)
}