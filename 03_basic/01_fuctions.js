function sayMyName() {
console.log("H");
console.log("O");
console.log("S");
console.log("H");
console.log("N");
console.log("A");
console.log("G");
}

// sayMyName // this is actually refence to the function=> this doen't print anything
// sayMyName() // this does the printing




// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4) //7
// addTwoNumbers(3,"4") //7
// addTwoNumbers(3, null) //3
// addTwoNumbers(3, "a") //3a 





// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(3,7) //10
// console.log("Result: ", result); //undefined


// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
//     console.log(result);
// }
// const result = addTwoNumbers(3,7) //noting => because we are doing cosole.log after returning from the function
// console.log("Result: ", result); //Result:  10




// function loginUserMessage(user){
//     return `${user} just logged in`
// }
// loginUserMessage("Hoshang") // prints noting
// //instead we should do this
// console.log(loginUserMessage("Hoshang")); //Hoshang just logged in => 
// //as function is returning then we have to print it
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // undefined just logged in //as we are not passing nothig in argument

// // so for not getting this kind of undefined syntax we should use if-else statement
// // CODE should be written in this format
// function loginUserMessage(user){
//     if(usesr === undefined || !user){
//         console.log("Please enter a userName");
//         return;
//     }
//     return `${user} just logged in`;
// }
// console.log(loginUserMessage()); //Please enter a userName










// function calculateCartPrice(num1){   ///...=> rest operator
//     return num1;
// }
// console.log(calculateCartPrice(2)); //2
// console.log(calculateCartPrice(5, 4, 7)); //5  //but we want to print 5, 4, 7

//so for doing this we use rest operator
// function calculateCartPrice(...num1){   ///...=> rest operator  && this is different from spread operator(glass tut gaya)
//     return num1;
// }
// console.log(calculateCartPrice(50, 48, 17)); //[ 50, 48, 17 ]  
// // rest operator gives output in form of ARRAY





// //passing OBJECTS in FUNCTIONS
// const user = {
//     userName: "Hoshang",
//     price: "56"
// }
// function handleObject(anyObject){
//     console.log(`Usesrname is ${anyObject.userName} and price is ${anyObject.price}`);
// }

// // handleObject(user) //Output => Usesrname is Hoshang and price is 56

// handleObject({
//     userName: "Dolly",
//     price: "785"
// })                    //Output => Usesrname is Dolly and price is 785






// //passing ARRAY in FUNCTIONS
const myNewArray = [290, 657, 9348, 3894, 3834]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //657
console.log(returnSecondValue([45, 456, 897, 23])); //456

