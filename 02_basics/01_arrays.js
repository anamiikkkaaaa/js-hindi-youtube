//array

const myArr = [0,1,2,3,4,5]; //elements can be of different datatypes, collection of multiple items
// js arrays are resizable

console.log(myArr[0]);
//js arrays copy operations create shallow copy, share same reference point

const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

//Array methods

/* myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr); */

//myArr.unshift(9); //array ke start me add kiya and array shift kiya

//console.log(myArr.includes(9));

//console.log(myArr.indexOf(5));
console.log(myArr);

/* const newArr = myArr.join()

console.log(myArr);
console.log(newArr); 
*/

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);

console.log(myn2);
console.log("C", myArr);
// splice manipulate the original array but slic doesn't, splice removes the mentioned index elements from original array
