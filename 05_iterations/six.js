const coding = ["js", "ruby", "java", "python", "cpp"]

/*

const values = coding.forEach( (item) => {
    //console.log(item);
    return item;
} )

console.log(values);

*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const newNums = myNums.filter( (num) => {
    return num > 4;
} );
console.log(newNums);
*/
const newNums = []

myNums.forEach ( (num) => {
    if(num>4) {
        newNums.push(num)
    }
})
console.log(newNums);

/*

const userBooks = [

];

let userBooks = books.filter( (bk) => bk.genre === 'history');

userBooks = books.filter( (bk) => { return bk.publish >= 2000 && bk.genre === "history"}); //scope open:{} have to use return

console.log(userBooks);

*/
