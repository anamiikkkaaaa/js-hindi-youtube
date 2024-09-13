const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// this keyword refers to current context.
/* 

JavaScript has different scopes:

Global scope: Variables declared outside any function or block are available globally.
Local scope: Variables declared inside functions or blocks are available only within that scope.
Great question! You’re absolutely right that both the username and the welcomeMessage function are part of the user object. 
However, in JavaScript, even though a method (like welcomeMessage) is defined inside an object, it doesn't automatically know 
which object it belongs to unless you explicitly tell it to refer to the object using the this keyword.

Why this is Necessary Inside Object Methods
When you define a method (like welcomeMessage) inside an object (like user), the method does not inherently know that it 
should refer to properties within the same object unless you use this. JavaScript treats the function inside the object 
as just a normal function, and functions by default don’t have any awareness of the object they are inside.

*/

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai() {

    console.log(this);
}
function chai() {
    let username = "hitesh";
    console.log(this.username);
}
chai()
//can't use this inside functions
/*

When you call the function chai() and use console.log(this.username); inside it, 
you’re referencing this.username. However, in the context of a regular function 
(like chai), this behaves differently depending on how the function is called.

Explanation of this in Regular Functions:
In a Non-Strict Mode ("use strict" not enabled):

When a regular function is called without an object (like chai()), this refers
to the global object. In a browser, the global object is window, and in Node.js, 
it is global.
Since username is a local variable inside the function (with let username = "hitesh";),
it is not attached to the global object, and this.username is undefined.
In Strict Mode ("use strict" enabled):

this will be undefined inside a regular function if it is called without an object. 
This prevents accidental reference to the global object.

*/

const chai = function(){
    let username = "hitesh"
    console.log(this.username)
} // undefined
// another word to declare function:
const chai = () => {
    let username = "hitesh"
    console.log(this);
} // undefined

/*const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
*/
// implicit return :
// const addTwo = (num1, num2) => num1 + num2 ;

// const addTwo = (num1, num2) => ( num1 + num2 ) ;
// const addTwo = (num1, num2) => {username: "hitesh"} can't return with curly braces on, undefined.
// const addTwo = (num1, num2) => (username: "hitesh") will return hitesh.

const myArray = [2,6,7,2];
myArray.forEach(function () {}) // or arrow functions () => ()