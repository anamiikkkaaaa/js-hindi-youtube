// object can be declared either as literal or constructor
// singleton: constructor se singleton banta h , ek hi hota h 
// literals se multiple instances ban jaate h 

// Object.create : constructor

// object literals

const mySym = Symbol("key1"); //declaring symbol, we'll use this as key
const JsUser = {
    name:"Hitesh",   // system by default name ko as a string leta h "name" value can be of any data type
    "full name" : "Hitesh choudhary", // cannot access this with dot
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@choudhary.com";
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser); // doubt