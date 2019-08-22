// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
/* increment in a loop by one. at each incrememnt check if number has a factor of three and five. else if it has a factor of three. 
else if it has a factor of five. print based on this*/

//make a loop for an array of the factors of 5
var myArray5 =[];
var myArray3 = [];

for (var i = 5; i <= 100; i+=5){
    myArray5.push(i)
}

for (var i = 3; i<=100;i+=3){
    myArray3.push(i)
}


//make a loop for an array of the factors of 3

    for (var i =1; i<=100; i++)
    {
        if (myArray3.includes(i) && myArray5.includes(i)){
            console.log("FizzBuzz");
        } else if (myArray3.includes(i)){
            console.log("Fizz");
        } else if (myArray5.includes(i)){
            console.log("Buzz");
        } else {
            console.log(i);
        }
        
        
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}