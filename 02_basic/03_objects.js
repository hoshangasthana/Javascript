// singleton => jab hum "constuctor" ke through object banate
            //   hai to jab apne type ka 1 hi instance jab banate hai
// Object.create





// Object "Literals"
// key value pair type, and jo key hai {string} and {Symbol} ki tarah declare hota hai and value can be have any data type
const JsUser = {
    name: "Hoshang",
    "full name": "Hoshang Asthana",
    age: 23,
    location: "Jodhpur",
    email: "hoshang0291@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser.email);  //hoshang0291@gmail.com

// // console.log(JsUser[email]); // ERROR
// console.log(JsUser["email"]);  //hoshang0291@gmail.com

// // console.log(JsUser."full name"); //Error=> chance hi nhi hum aise type ko access kar paye that's why we have this second method to access
// console.log(JsUser["full name"]); //Hoshang Asthana





// //INTERVIEW QUESTION
// // how to declare a symbol like a key in object
// // Declaring a Symbol (one of 7 primitive data types)
// const mySym = Symbol("key1");
// const JsUser = {
//     [mySym]: "key1",    // {symbol} type key
//     name: "Hoshang",
//     "full name": "Hoshang Asthana",
//     age: 23,
//     location: "Jodhpur",
//     email: "hoshang0291@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Mondays", "Saturday"]
// }
// console.log(mySym); //Symbol(key1)
// console.log(JsUser[mySym]);  // key1


JsUser.email =  "hoshang@chatgpt.com"
console.log(JsUser["email"])

Object.freeze(JsUser)
JsUser.email =  "hoshang@chatgpt.com"
console.log(JsUser["email"])


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log("Hello JS user, ${this.name}");
}