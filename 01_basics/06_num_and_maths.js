/* const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //fixed decimal place , precision value

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3)); // if num was 123.37849 then ans would be 123, if 1123.4353 then 1.12e+ something 

const hundreds = 100000;
// console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); // indian system

minNumber.MIN_VALUE;
maxNumber.MAX_VALUE;
*/
/**************MATHS**************/

console.log(Math);
console.log(Math.abs(-4)); // number becomes positive
console.log(Math.round(4.6)); //roundoff

console.log(Math.ceil(4.2)); //top value roundoff
console.log(Math.floor(4.9)); // lesser value roundoff

console.log(Math.min(4,5,3,2,6));
console.log(Math.max(1,6,4,7,3,9));

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);