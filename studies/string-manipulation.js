// String manipulation
/* String manipulations can be done via methods or operators. A string 
* manipulation is simly code
* which changes the value of a string, by removing, adding and/or rearranging its characters.
*/

//With operators
// the addition operator can be used to cacotanate two strings, appending the 
// second string to the first.
console.log("hello" + "my friend.");
// The addition operator will not add any characters, so any apces needed between 
// the two strings
// one intends on cacotanating needs to be present beforehand.

// With string methods
console.log("h".toUpperCase());
// This method would return the uppercase letter H. There are many methods for 
// manipulating strings such as toUpperCase, toLowerCase, and split.
console.log("hello world".split(" "));
// this would split hello world into an array of strings at the space " " character.
//replace can be used to systematically remove and replace any specific characters
//or combinations of character from a string, such as removing spaces
"hello world".replace(" ", "-"); //this would replace all spaces with dashes.
//slice can be used to retrieve just one section of a string
//for instance, everything after the first letter
"hello".slice(1); //this returns a string of . "ello"
//charAt can let us grabe a character at a certain index, simliar to using bracket notation
"hello".charAt(0);
//This would return "h"
//combining these two methods, we could easily break apart a string
//capitiliz its first letter, and then return a concatanated version with
//the first letter now capitalized
let myString = "hello";
let firstLetter = myString.charAt(0);
let restString = myString.slice(1);
firstLetter = firstLetter.toUpperCase();
let newMyString = firstLetter.concat(restString);
//voila, we now have a string of "Hello"