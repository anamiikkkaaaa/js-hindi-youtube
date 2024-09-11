// Dates

let myDate = new Date();
console.log(myDate); // not readable enough

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate); //date is an object in js

//let myCreatedDate = new Date(2023,0,23);  // month 0 se start hote h js me when in single digit
// console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2023,0,23, 5, 3);
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-14");

let myCreatedDate = new Date("14-01-2023");

let myTimeStamp = Date.now()

//console.log(myTimeStamp); //time in ms from a fixed date
//console.log(myCreatedDate.getTime());  // time in ms

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date;
console.log(newDate.getDate);
console.log(newDate.getFullYear); //etc etc there are other such functions

newDate.toLocaleString('default', {
    weekday: "long",
})
