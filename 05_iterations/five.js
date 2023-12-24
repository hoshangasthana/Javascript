// for each loop => high order function

const coding = ["js", "ruby", "java", "pyton"]

//1st method
// coding.forEach( fuction (item) {
//     console.log(item);
// } )
// /*
// js
// ruby
// java
// pyton
// */

// //2nd method
// coding.forEach( (item) => {
//     console.log(item);
// })
// /*
// js
// ruby
// java
// pyton
// */


// //3rd method
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
// /*
// js
// ruby
// java
// pyton
// */



// //4th method
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
// /*
// js 0 [ 'js', 'ruby', 'java', 'pyton' ]
// ruby 1 [ 'js', 'ruby', 'java', 'pyton' ]
// java 2 [ 'js', 'ruby', 'java', 'pyton' ]
// pyton 3 [ 'js', 'ruby', 'java', 'pyton' ]
// */




// // array of objects
// const myCoding = [
//     {
//         languageName: "java",
//         languagefileName: "java"
//     },
//     {
//         languageName: "c++",
//         languagefileName: "cpp"       
//     },
//     {    
//         languageName: "python",
//         languagefileName: "py"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })
// /*
// java
// c++
// python
// */