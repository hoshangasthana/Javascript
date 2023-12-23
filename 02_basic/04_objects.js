// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstName: "Hoshang",
        lastName: "Asthana"
    }
}
// console.log(regularUser);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3);//not good => object of object =>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// console.log(Object.keys(tinderUser));  //gives me keys in form of array=>[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //gives me values in form of array=>[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //array of array of key and value=> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]




// ###########################################################   Object ko destructure karna used mostly in react.js ##############################

const course = {
    courseName: "js in Hindi",
    price: "9999",
    courseInstructor: "Hitesh"
}

//course.courseName  //Hitesh

// we use this method to access any value of key in objects instead of again and again calling {course.courseName},
const {courseInstructor} = course // first we declare in form of this, it is mainly used in react.js 
console.log(courseInstructor); //Hitesh

const {courseInstructor: instructor} = course //we can also do this as it's naming convection only
console.log(instructor); //Hitesh




// ###########################################################   API in form of JSON ##############################
//API either comes in form of OBJECTS or Array of OBJECTS
// {
//     "name": "hitesh",
//     "courseName": "js in Hindi",
//     "price": "free"
// }
// OR
// [{}, {}, {}]