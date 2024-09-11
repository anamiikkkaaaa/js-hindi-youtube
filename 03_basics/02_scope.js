/* let a = 10;
const b = 20;
var c = 30; */
// we can console.log these very easily
let a = 300          // will be 300 globally but 10 in if statement
if(true){
    let a = 10;
    const b = 20;
    var c = 30; 
    console.log("inner: ", a)
}

//console.log(a)    will show error as out of scope
//console.log(b)    error
console.log(c)    // ye print ho jayega

// global scope in node env and browser console is different