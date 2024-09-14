const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in 
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(key);
}

const map = new map()  //key value pairs, no duplicates
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for(const key in map){
    console.log(key);
} 

// not iterable, why???
/* 
Feature	for...in	for...of
Iterates over	Enumerable properties (keys) of an object	Values of iterable objects (like arrays)
Use case	Objects (and arrays, but for indices)	Arrays, strings, Maps, Sets, etc.
Returns	Keys (property names or indices)	Values of the iterable
Can iterate over	Inherited properties	No, only the object's own elements
Example	for (let key in obj)	for (let value of iterable)
Key Characteristics of Enumerable Properties:
Default Behavior:
Properties you add directly to an object using dot notation or bracket notation 
(e.g., obj.property = value) are enumerable by default.
Iterability:
Only enumerable properties can be iterated over by a for...in loop, Object.keys(), or similar methods.
Not All Properties Are Enumerable:
Some properties, like those defined in certain ways (e.g., using Object.defineProperty()), can be 
non-enumerable by default.
Inherited properties from the object's prototype chain may also not be enumerable
*/