// primitive
// 7 types: string, boolean, number, null, undefined, symbol, BigInt
// Reference( non primitive)
// array, objects, functions
// javascript is a dynamically types language.

const score = 100;
const scoreVal = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;   // undefined value 

const id = Symbol('123');
const anotherId = Symbol('123');
// id and anotherId are not same as they are symbols.

const bigNum = 34786979237821392029n; //bigInt

const heros = ["shaktiman", "naagraj", "doga"]; // array, obj and function typeof is object
let myObj = {
    name:"hitesh",
    age: 22,
};
const myFunction = function(){
    console.log("Hello world");
}
//typeof null is object, and typeof undefined is undefined.


//stack(primitive datatype): copy of the variable , heap(non-primitive): reference to original value

let myYoutubename ="hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl",
};
let userTwo = userOne;
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);