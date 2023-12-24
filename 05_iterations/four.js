// for in loop
// to iterate object we use for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(key);
}
/*
js
cpp
rb
*/


for (const key in myObject) {
    console.log(myObject[key]);
}
/*
javascript
C++
ruby
*/

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
*/


//in map we can't use for in loop as map is not iterable
