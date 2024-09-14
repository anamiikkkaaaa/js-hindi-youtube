// for of 

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const iterator of object) {  //object se tatparya hai kis cheez par loop lagana h 

}
for(const num of arr) {
    console.log(num);
}

const greetings = "hello world";
for(const greet of greetings) {
    console.log (`each char is ${greet}`);
}

//Maps

const map = new map()  //key value pairs, no duplicates
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value ] of map ) {
    console.log(key, ':-', value);
}
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
}
/*
for (const [key, value ] of myObject ) {
    console.log(key, ':-', value);
} // object is not iterable like this will give error
*/

