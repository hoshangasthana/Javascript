// array
//array makes shallow copy => have same reference point, that means if i change in new array then previous array elements also gets changed
const myArr = [0, 1, 2, 3, 4]
const myHeros = ["SpiderMan", "BatMan", "Thor"]

const myArr2 = new Array(1,2,3,4,5,6,7)

// console.log(myArr2[0]);


// Array methods
myArr.push(6);
myArr.push(78)
myArr.pop()

myArr.unshift(9) //push in front
myArr.shift() // pop in front 

// console.log(myArr);

console.log(myArr.includes(9)); // gives answer in boolean form
console.log(myArr.findIndex(3)); // 

const newArr = myArr.join()  //converts the array into comma sepreated values, 
                    //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A ", myArr);


const myn1 = myArr.slice(1,3);  //slice
console.log(myn1);
console.log("B ", myArr);


const nyn2 = myArr.splice(1,3)  // splice
console.log(myn2);
console.log("C ", myArr);  // origianal got manipulated, spliced array gets deleted






