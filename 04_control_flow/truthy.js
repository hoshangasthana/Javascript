const userEmail = "hoshang@gmail.com";

if(userEmail){
    console.log("userEmail is present");
}










//falsy values=>
// false , 0, -0, BigInt, "", null, undefined, NaN

//truthy values=>
// "0", 'false', " ",[], {}, function(){}(empty function)

if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is Empty");
}







// NUllish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10
console.log(val1);  // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 78
console.log(val1); // 78

val1 = null ?? 78 ?? 10
console.log(val1); // 78










// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80"); //more than 80