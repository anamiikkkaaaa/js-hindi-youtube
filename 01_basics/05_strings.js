const name = "hitesh";    //declare string 1
const repoCount = 50;

console.log(name +repoCount + "Value") ; //outdated syntax

//string interpolation, we make placeholders, using back ticks

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');  //declare string 2

console.log(gameName[0]);   // 0:h these are key value pairs as string is an obj but it is not an array
console.log(gameName.__proto__); //you'll get object 

console.log(gameName.length)
console.log(gameName.toUpperCase()); //didn't change original string though
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //here if we give negative number it'll just start from 0
console.log(newString);

const anotherString = gameName.slice(-8,4); //count from backwards
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes white spaces and line terminators

// const url = "https://hitesh.com/hitesh choudhary"; // browser will automatically replace this space with %20
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-')); // we need separator and limit here