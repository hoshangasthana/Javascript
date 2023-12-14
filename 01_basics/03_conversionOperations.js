score = "3563"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(Not a Number)
// ture => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
// 1 => ture; 0=> false
// "" => false
// "asdg" => true

let someNumber = 34

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);