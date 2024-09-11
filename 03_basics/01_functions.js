function sayMyName(){
    console.log("H");
    console.log("I")
    console.log("T");
    console.log("E");
    console.log("S")
    console.log("H");
}

sayMyName();

/* function addTwoNumbers(num1,num2){
    console.log(num1 + num2 );
}
addTwoNumbers(2,3);
addTwoNumbers(3, "a");

const result = addTwoNumbers(3,5);
console.log("result: ", result); //result will be undefined because function is not returning anything is it just printing
*/
function addTwoNumbers(num1,num2){
    let result = num1 + num2;
    return result;
    console.log("hitesh") //this is unreachable code as it is after return 
}
const result = addTwoNumbers(3,5);
console.log("result: ", result);

function loginUserMessage(username){ // or give username a default value username = "sam"
    if(username === undefined){  // or (!username)
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());


/*
function calculateCartPrice(...num1){   // spread operation or rest operator 
    return num1
}
console.log(calculateCartPrice(200, 400, 500));
*/
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username: "sam",
    price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));