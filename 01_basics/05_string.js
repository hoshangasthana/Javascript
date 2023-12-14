const name = "hoshang"
const repoCount = 50

// console.log(name + repoCount + "value");   //DON'T follow this type of syntex, it's outdated

//modern => baptics(does string interpolation) 
//=>in this we make placeholders and then we can directly inject it
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// benefits=> we can do many things on the go
console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);



//Another method to declare string

const gameName = new String('hope')
console.log(gameName);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameNmae.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newSting = gameName.substring(0,2);
console.log(newSting);

const anotherString = gameName.slice(-8, 4);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://hoshang.com/hope%20asthana"
console.log(url.replace('%20', '-'));

console.log(url.includes(sundar));

console.log(gameName.split('-'));

