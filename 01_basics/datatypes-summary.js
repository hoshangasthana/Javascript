// Primitive
// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Q. Javascript is Statically type or Dynamic type language?

const score = 100
const scroreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false because symbol gives another value every time even though we pass 123(which is same)

const bigNumber = 12345678912111214n

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// object declaration-1
{
    name: "hoshang",
    age: 23
}

// object declaration-2
let myObj = {
    name: "hoshang2",
    age: 23
}

const myFunction = function(){
    console.log("Hello world");
}

// how to find data type => typeof