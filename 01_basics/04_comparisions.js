// pretty there is similar comparasions operation like other languages like in c++

console.log("2" > 1);  // true
console.log("02" > 1); // true
// we should not compare variables with different data types,
// as this may or may not give the result that we are looking for it
// so we should not follow this type of practise
// because of all these reasons typescript is introduced 
// as in TYPESCRIPT we can't follow these kind of practices

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// IN javascript comparisions operations and ==, === work differently

console.log(undefined > 0); // false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === => strict check(checks data type also in checking comparision)
console.log("2" === 2); //false
