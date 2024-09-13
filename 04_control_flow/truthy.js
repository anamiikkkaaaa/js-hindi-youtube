//const userEmail = "hi@tesh.ai";
const userEmail = "";

if(userEmail){
    console.log("got user email");
} else{
    console.log("don't have user email");
}
//truthy and falsy values

// falsy values: false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN
// except these all are trutty, even empty array
// truthy value: "0", 'false', " ", [], {}, function(){} empty function

if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
}
// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10             //5
val2 = null ?? 10          //10
val3 = undefined ?? 15     //15
val4 = null ?? 10 ?? 20    //10 , callback

console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");