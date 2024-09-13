// Immediately Invoked Function Expressions ( IIFE )

/* 
function chai(){
    console.log(`DB CONNECTED`);
}
chai()
*/
//iife:
(function chai(){
    console.log(`DB CONNECTED`);
})(); //semicolon is important here

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
