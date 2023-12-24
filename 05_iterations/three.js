// FOR of loop

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}
/*
1
2
3
4
5
*/



const greetings = "hello Hoshang"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
/*
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is H
Each char is o
Each char is s
Each char is h
Each char is a
Each char is n
Each char is g
*/



//MAPS => same as map in C++ (orderd map=> maintains order, same key can't be resested again)

const map = new Map()
map.set('IND', "India")
map.set('US', "Usa")
map.set('PAK', "Pakistan")
map.set('FR', "France")
map.set('IND', "India")

console.log(map);
/*
Map(4) {
  'IND' => 'India',
  'US' => 'Usa',
  'PAK' => 'Pakistan',
  'FR' => 'France'
}
*/

for (const key of map) {
    console.log(key);
}
/*
[ 'IND', 'India' ]
[ 'US', 'Usa' ]
[ 'PAK', 'Pakistan' ]
[ 'FR', 'France' ]
*/

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/*
IND :- India
US :- Usa
PAK :- Pakistan
FR :- France
*/



const myObject = {
    'game1': 'NFS',
    'GAME2': 'GTA'
}
for (const [key, vlue] of myObject) {
    console.log(key, ':-', value);   //TypeError: myObject is not iterable
}
// therefor we can't Interate object using for of loop