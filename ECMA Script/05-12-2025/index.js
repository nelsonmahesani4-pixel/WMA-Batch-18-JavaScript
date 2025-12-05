// Use for loop 
for (var i = 1; i<=10; i++) {
  console.log(5 + "  x   " + i + "  =  " + (i * 5));
}

// for (var i = 10; i >= 1; i--) {
//   console.log(5 + "  x   " + i + "  =  " + (i * 5));
// }

// var arr1 = [1,2,3,4,5,6,7,8,9,10]
// for(let i=arr1.length-1; i>=0; i--){
//     console.log("i==>", arr1[i])
// }

// var arr1 = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<=10; i++){
//     console.log("i==>", i)
// }

var arr1 = [1,2,3,4,5,6,7,8,9,10]
for(let i=arr1.length-1; i>=0; i--){
    if(arr1[i] % 2 == 0)
    console.log("i==>", arr1[i])
}
var arr1 = [1,2,3,4,5,6,7,8,9,10]
for(let i=arr1.length-1; i>=0; i--){
    if(arr1[i] % 2 == 1)
    console.log("i==>", arr1[i])
}
