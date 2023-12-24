// Immediately Invoked Function Expression(IIFE)
// we use IIFE because global scope ke pollutin se problem hote hai kai baar
// so global scope ke pollution ko bachane ke liye we use IIFE




//1st =>
// function chai(){
//     console.log("DB connedted");
// }
// chai()  //DB connedted



//2nd =>
// function chai(){
//     console.log("DB connedted");
// }()  //SyntaxError: Unexpected token ')'



// //3rd =>
// (function chai(){
//     console.log("DB connedted");
// })() //DB connedted
//MEANING => ()() => in this first paranthesis (), this is for function's defination and 2nd paranthesis() is for execution



//4TH Method
// (() => {
//     console.log("DB2 Connected")  
// })() //DB2 Connected


//5th method
((Username) => {
    console.log(`DB2 Connected ${Username}`)  
})('hoshang') //DB2 Connected hoshang


//named IIFE => jab function ka naam ho like "chai function in IIFE"
//UNnamed IIFE => using ARROW function

//IMPORTANT=>
//how to declare two IIFE in one Same PROGRAM, use semicolon(;) after functions => ()();
