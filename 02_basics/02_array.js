const marvel_heros =["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // array ke andar dusra array as a element aa jayega

const allHeros = marvel_heros.concat(dc_heros);
console.log(marvel_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6], 7, [6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity); depth kitni tak flat karna h 

console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
//console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"})) // interesting, ese empty array dega because it doesn't know ki keys se array banana h ya value se

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
