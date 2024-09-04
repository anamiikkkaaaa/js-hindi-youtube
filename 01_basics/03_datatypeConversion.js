let score = 33;
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

/* 
33ab --> NaN
null --> 0
undefined --> NAN
boolean : T-->1, F-->0
string --> NaN
*/

let isTrue = 1;
let toBoolean = Boolean(isTrue);
console.log(typeof toBoolean);
/* to boolean
1-->T, 0-->F
"" (empty string)-->F
string--> T
*/

let xyz = 33;
let toString = String(xyz);
console.log(typeof toString);
