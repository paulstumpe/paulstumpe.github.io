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

// Datatypes
/* Computer Programs make decisions dynamically based on values. Datatypes describe all of the ways a langauge can store or express values, and what those values are capable of holding or describing. Furthermore, by using datatypes to our advantage, we can manipulate values in different ways. The addition opperator is a perfect example. When given a number datatype, it performs arithemetic addition but when given a string it will join the data types, known as cacotanating. If we want to manipulate numbers mathematically, the number data type is immensely useful. But by putting numbers in a string datatype, we lose access to those methods. This closes some doors, while opening others.

At first glance, the characters we use to demark datatypes are easy to look over or confuse with others. In some instances, like the number data type, there is no characters used to designate it at all. It's the lack of characters other demarking characters, and the presence of numbers that inform our compiler how to store and handle these values. Other times, "", [], and even {} can all inform the computer how to handle and store data (javascript is even constructed well enough to know when curly braces are for the purposes of data type declaration as opposed to code blocks).
Lets put this knowledge into action
*/

// First I will type a value, 29 in this case
29;
//this value on it's own is doing nothing, but we can see that javascript recognizes it as a number, and considers it that datatype
console.log(typeof 29);




// Number
// String
// Boolean
// Array
// Object
// Function
// undefined
// null
// NaN
// Infinity and -Infinity (Google them if you don’t know!)
// What is the difference between primitive/simple and complex data types?
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?