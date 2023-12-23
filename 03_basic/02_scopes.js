let a = 10
const b = 20
var c = 30

console.log(a);//10
console.log(b);//20
console.log(c);//30

if(true){
    let aa = 101
    const bb = 202
    var cc = 303
}
console.log(aa);//aa is not defined
console.log(bb);//bb is not defined
console.log(cc);//303
//as aa and bb doesn't comes out of that scope
// that is why we don't use var
