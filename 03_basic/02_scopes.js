// let a = 10
// const b = 20
// var c = 30

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// if(true){
//     let aa = 101
//     const bb = 202
//     var cc = 303
// }
// console.log(aa);//aa is not defined
// console.log(bb);//bb is not defined
// console.log(cc);//303
// //as aa and bb doesn't comes out of that scope
// // that is why we don't use var

















// ################################# Nested Scope #################################


function one(){
    const userName = "Hoshang";

    function two(){
        const website = "github.com";
        console.log(userName);
    }

    // console.log(website); // website innerscope so not be used

    two();
}

// one();


if(true){
    const userName = "hoshang";
    if(userName == "hoshang"){
        const website = "youtube";
        // console.log(userName + website); //3rd time we will get output => hoshangyoutube
    }
    // console.log(website);//1st error => website is not in it's scope
}
// console.log(userName); //2nd error => userName website is not in it's scope













// ########################################## INTERESTING ###########################################


//Hoisting and execution context
function addone(num){
    return num + 1;
}
addone(5)

const addtwo = function(num){
    return num + 2;
}
addtwo(50)


