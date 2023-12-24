// const user = {
//     usesrName: "hoshang",
//     price: 789,

    
//     welcomeMessage: function(){
//         console.log(`${this.usesrName} , welcome to this webstie`);
//         // console.log(this);
//         //{
//         //   usesrName: 'hoshang',
//         //   price: 789,
//         //   welcomeMessage: [Function: welcomeMessage]
//         // }
//     },

    
// }

// user.welcomeMessage() //hoshang , welcome to this webstie

// user.usesrName = "Hope"
// user.welcomeMessage() //Hope , welcome to this webstie
// console.log(this); //{}








// ####################################### functions ########################################################





// // 1st type of function
// function chai(){
//     let userName = "hoshang"
//     console.log(this);
//     /*
//     <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }
//     */
// }
// chai()



// //1st type of function (trying to excess this.userName )
// function chai(){
//     let userName = "hoshang"
//     console.log(this.userName);  //undefined
// }
// chai()


//2nd type of function (trying to excess this.userName )
// const chai = function (){
//     let userName = "hoshang"
//     console.log(this.userName);  //undefined
// }
// chai()


//          ARROW function
//3rd type of function (trying to excess this.userName )
// const chai = () => {
//     let userName = "hoshang"
//     console.log(this.userName);  //undefined
// }
// chai()










// ##############################3 ARROW FUNCTION ####################################3333

//basic arrow function  or EXPLICIT return ARRow function(return keyword lagana padh rha hai)
// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(56,64)); //120


//Impicit return Arrow Function(no need for return keyword)
// addTwoNumbers = (num1, num2) => (num1 + num2) // curly braces{} => use karenge to return keyword use karna hi padhega, 
//                                             // but jab normal braces() => use karenge to no need for return keyword
// console.log(addTwoNumbers(506,64)); //570



//now if we return object using IMPLICIT return ARROW Function
// const addTwo = () => ({userName: "Hoshang"})








