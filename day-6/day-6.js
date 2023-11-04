// for (var i = 23; i <= 45; i++){
//     if (i % 2 !=0){
//         console.log(i)
//     }
// }

// var count = 0;
// for (var i = 23; i <= 45; i++){
//     if (i % 2 != 0){
//         count++;
//     }
// }
// console.log(count)

// var oddcount = 0;
// var evencount = 0;

// for (var i = 23; i <= 45; i++){
//     if(i % 2 != 0){
//         oddcount++;
//     } else { evencount++;

//     }
// }
// console.log(oddcount,"odd count")
// console.log(evencount, "even count")

// var oddnumbers = [];
// for (var i=23; i <= 45; i++){
//     if (i % 2 != 0 ){
//         oddnumbers.push(i)
//     }
// }
// console.log(oddnumbers, 'list')


// var numbers = [1,2,3,4,5,6,7,8,9,];
// var evenarray = [];
// for (var i = 0; i <numbers.length; i++){
//     if (numbers[i]% 2 == 0){
//         evenarray.push(numbers[i])
//     }
// }
// console.log(evenarray)

// var array = [1,2,3,4,5,6,7]
// var target = 35;
//  var flag = false;
//  for (var i = 0; i < Array.length; i++){
//     if (array[i] == target){
//         console.log("found it")
//         flag = true;
//     }
//  }
//  if (flag == false){
//     console.log ("not found")
//  }

var array = [ 1,2,3,4,5]
var target = 8;
for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
        if(array[i] + array[j] == target){
            console.log(array[i], array[j])
        }
    }
}

 