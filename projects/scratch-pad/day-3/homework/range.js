// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
       // var wtih array to return
    var myArray = [];
    //if first argument greater than second, run this
    
    if(start > end){
        //i number and number
        //o array containing all numbers between start and end, highest to lowest
        //c
        //e
        //for loop starting at start, subtracting one with each iteration, ending when it is equal or less than end
        for (var i=start; i +1 > end;i-- ){
            //put each number onto back of myArray
            myArray.push(i);
            console.log(i);
        }
        
    //if second argument greater than first run this
    } else{
        //for loop starting at start, incrementing up until it reaches or surpasses end
        for(i = start; i-1 < end; i++){
            myArray.push(i);
        }
        
    }
    console.log(myArray);
    return myArray;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}