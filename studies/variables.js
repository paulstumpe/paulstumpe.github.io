/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



/* 
* var is a keyword for variables that will assign the variables global scope and block scope within
* functions. Dangerously though, var will also allow our variables to be reassigned later in the code
* and has global scope when used inside loop code blocks. Often times, this is less than preferable.
* Fortunately, JS also inclues let and const keywords.
*
* The let keyword also allows its declared variables to be reassigned, but instead of having global
* scope inside of code blocks for loops, it has local scope. This can help safe proof us, when we
* may unthinkly repeat a variable name
*/
let myLetVariable = 2;
myLetVariable = true;
console.log(myLetVariable);

/* const behaves much like let, retaining the same scopes. It however also prevents us from
* accidentally overwriting the value. It can not be reassigned after declaration, unlike let and var.
*/

const myConstVariable =3;
// myConstVariable = true;  not a valid line of code and would result in an "assignment error"
console.log(myConstVariable);

// Hoisting
/* 
* in javascript variables are hoisted. This means all variables, regardless of what line they're
* written on, will be declared at the top of program, before the rest of the code. While this ensures
* they're always available to our program, it also can lead to some unusual circumstances a coder
* must remain aware of.
*/