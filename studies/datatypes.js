// Datatypes
/* Computer Programs make decisions dynamically based on values. Datatypes 
describe all of the ways a langauge can store or
express values, and what those values are capable of holding or describing. 
Furthermore, by using datatypes to our advantage,
we can manipulate values in different ways. The addition opperator is a perfect example. When given a number datatype, it
performs arithemetic addition but when given a string it will join the data types, known as cacotanating. If we want to 
manipulate numbers mathematically, the number data type is immensely useful. But by putting numbers in a string datatype, we 
lose access to those methods. This closes some doors, while opening others.

At first glance, the characters we use to demark datatypes are easy to look over or confuse with others. In some instances, 
like the number data type, there is no characters used to designate it at all. It's the lack of characters other demarking 
characters, and the presence of numbers that inform our compiler how to store and handle these values. Other times, "", [], and 
even {} can all inform the computer how to handle and store data (javascript is even constructed well enough to know when 
curly braces are for the purposes of data type declaration as opposed to code blocks).
Lets put this knowledge into action
*/

//Number
// First I will type a value, 29 in this case
29;
//this value on it's own is doing nothing, but we can see that javascript recognizes it as a number, and considers it that datatype
console.log(typeof 29);
// the datetype above is a Number. This is a simple datatype.
//String
// The string data type, unlike the number datatype, has a symbol to demark it. To make a string, we'll make an enclosure of "" or ''
"hello";
// This is a string data type, recognizable in the code by the quote marks. It can store not only letters, but other 
// characters as well, including numbers, so it's important to differentiate from the number data type.
console.log(29);
// 29 as a number
console.log("29");
// 29 as a string.

// Boolean
// a boolean is a data type that evaluates in a binary fashion, to either true or false.
true;
// Any comparison statements we right will also be boolean values, as they will be reduced to true or false.
3<4; //true
//these values are very useful for directing our code to take actions, or not take actions, depending on circumstance.

// Array
// An array is our first Complex data type in this list. It's denoted by brackets
[]; //array literal
// Arrays are useful for storing other datatypes, and the values we store inside are accessed via their place in the arrays index.
["apple", "orange", "banana"]; 
//arrays are written on a zero base index, so "apple" is at spot 0 instead of 1, and orange is at spot 2, not 3 like you might assume.
//arrays can hold any value or datatype, including other arrays, objects, or variables containing data types.
var myArray = ["apple", 2, false, [1,2, "orange"]];
console.log(myArray);
// Object
//Objects, like arrays, are complex objects. Unlike arrays, they use key-value pairings to organize the data they contain. So instead of finding the data via it's position in an index, we'll find it by the string "" we set as its key.
var myObject = {fruit : "apple", color : "red"};//objects are denoted by curly braces.
// Many items in javascript use object as their root prototype, including arrays!
console.log(myObject.fruit);
// Function
// a function is more than a collection or storage of values. a function can be "called" at any point in the program, to 
// achieve some effect through an expression. Functions are marked by the keyword function when being declared, and defined. 
// This will be followed by a set of parentheses () where any parameters can be set. Then, the code block to be ran is wrapped
// in curly brackets.
var myFunction = function (parameter1,parameter2){
    console.log(parameter1);
    console.log(parameter2);
};
//now to call this function, we write it like so.
myFunction(myArray,myObject); //this will reference the function above, saving us the trouble of typing that codeblock out anytime we want to print two values.
// undefined
// undefined IS a value type a variable can hold or return. It most often represent the value a varialbe has after being 
// declared, but never being initialized. In other words, if we make a variable but forget to ever assign it a value, that 
// variable will still return undefined, instead of randomly using whatever code was left in the memory it wrote itself in.
var a;
console.log(a); //a returns undefined, as we never gave it a value.
// null
// The datatype null represents a lack of value, similiar to undefined. The
// difference is that a null value is set by a programmer, letting us know
// that at this time, there is no value on purpose. Its been nullifed
var myNull = null;
console.log(null);
// NaN
// Nan stands for "Not a Number." This is another simple datatype. It typically indicates that a value is not a legal number.

// Infinity and -Infinity (Google them if you don’t know!)
// Infinity and -Infinity on values that can result from methods like Max Value.
// One way to explain them is as numbers higher or lower than any other number. And as concepts they
// behave exactly as we would expect them to in mathematics, for instance the multiplication operater
// used on a number and infinity will result in infinity
console.log(Infinity * 3);

// What is the difference between primitive/simple and complex data types?
// As evidenced by our Array and Object descriptions, complex data types can hold other data types.
// They are also, when attached to variables, refrenced by their place in memory rather than
// a literal evaluation of the data they include. They have indefinite size, due to their potential to hold
// any number of other data types.
// Simple data types on the other hand, can not hold other data types. Operations on simple
// data types always result in a new simple data type. They don't change the original
// data, but reassign a binding to a new datapoint. 20 will always be 20. If we look to change 20 to 30
// by adding 10, we'll simply assign a whole new value of 30 to the binding. Not change that previous 20 
// to thirty. Twenty is still twenty, we rebound our variable to the new number of 30. This is because numbers
// and all simple data types are immutable.

// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
// passing by copy means we the computer simply looks at that value held there, and copies it
// to the processor, then prints this value in a new location or operates on this value.
// passing by reference though, passes the adress of the data value in memory instead.
// I've begun thinking of it this way. When our code looks at a  data type, it's as if
// it were looking at a mailbox. For simple datatypes, the mailbox is wide open and our
// program can simply pull the mail from it. "this letter reads 2" "this letter reads 'Hello'"
// When our pc comes across a complex data type though, its as if the mailbox is  locked POBOX.
// That locked POBOX would be a real hassle to get into. So instead, the computer remembers what
// adress this PObox is at. If someone needs to get inside, it will point and say thats
// where the POBOX is. For a simple datatype though, it'll simply jack the mail for you and
// say "hey man, that letter said '4', want me to copy that down on this new letter too?

// An example of copy by value
let x = 20
let y = x
x = 30
console.log(x)
//the value of x here is 30
console.log(y)
//the value of y however is still 20. When we set y to the value of x, we looked at what x was set to and
//gave y the same value. So when we bind x to another number, y doesn't care. It wasn't really set to be 
//x. It was set to be whatever x was at the time. This is because x was set to a simple data type.

//With complex datatypes, this goes differently. As I described before, complex datatypes are copied by
//reference, meaning this is closer to an adress when we copy it, instead of just a simple value.
let complex = [1,2]
let complexCopy = complex;

complex.push(3);

console.log(complex);
//complex's value here is now an array of [1,2,3]
console.log(complexCopy);
//however, so is complexCopy!. complexCopy is simply looking at the adress complex is using for its data structure. This is the difference between the types of copy assignment in javascript.