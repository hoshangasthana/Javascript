const marvel_heros = ["Ironman", "Hulk", "Thor"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'Ironman', 'Hulk', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]
//                             // gives me array of array
//                             // so we should not push like this
//                             // this is actually probelmatic
// console.log(marvel_heros[3][1]) // Superman



// const allHeros = marvel_heros.concat(dc_heros) //[ 'Ironman', 'Hulk', 'Thor', 'Batman', 'Superman', 'Flash' ]
// console.log(allHeros);




// const all_new_heros = [...marvel_heros, ...dc_heros] // (...) => Spread operator, 
//                                                     // Kaanch ka glass tut gaya
//                                                     // meaning saare array ke elements alag-alag ho gaye

// console.log(all_new_heros); //[ 'Ironman', 'Hulk', 'Thor', 'Batman', 'Superman', 'Flash' ]




const another_array = [1,2,3,[4,5,6],[7,8,[9,10,11,12,[13,14,15,16]]]] //nested array

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // 
// /*[
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12,
//    13, 14, 15, 16
//  ] */

//  const real_another_array2 = another_array.flat(1)
//  console.log(real_another_array2); //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11, 12, [ 13, 14, 15, 16 ] ] ]

//  const real_another_array3 = another_array.flat(2)
//  console.log(real_another_array3); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, [ 13, 14, 15, 16 ] ]

//  const real_another_array4 = [...another_array]
//  console.log(real_another_array4); //[ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 10, 11, 12, [Array] ] ] ]

console.log(Array.isArray("Hoshang"));  //false
console.log(Array.from("abs")); //[ 'a', 'b', 's' ]
console.log(Array.from({nanme: "Hoshang"})); //[]  => interesting CASE for INTERVIEW => js ko pata nhi chal rha key ko ya value ko kisko array me change kare that's why

let score1 = 100
let score2 = 234
let score3 = 543
console.log(Array.of(score1,score2,score3)) //[ 100, 234, 543 ]
