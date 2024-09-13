// if
/*
if(true){

}
if(false){

}
if(4>5){

}
const isUserloggedfIn = true

if(isUserloggedfIn){

}
else{

}
*/
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if( score > 100){
    let power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);

// short hand notation:

const balance = 1000

if(balance > 500 ) console.log("test");  //implicit scope


if(balance > 500 ) console.log("test"), console.log("test2"); // don't do this even though correct not a good practice 

//nesting

if (balance < 500 ) {
    console.log("less than");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}