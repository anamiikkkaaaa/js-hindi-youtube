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

/* 
How does javascript execute code + call stack 
javascript execution context
{} global EC / global environment --> locate in this
 js is single threaded, everything inside it is a process.
 function execution context
 eval execution context
 { } --> memory creation phase
     --> execution phase: new variable environment + execution thread.

Call stack:
global execution
LIFO
*/