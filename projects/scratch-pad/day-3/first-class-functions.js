// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // i'm returning a function.
    // the function i return should test if what it's given is greater than base.
    //basically, i'm making a function to test if things are greater than the value i'm being passed in parameter base
    
    return function(givenValue) {
        // this is returning a boolean based on if its greater.
       return givenValue > base;
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (givenValue){
        return givenValue < base
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //return function, that takes givenValue
    return function (givenValue){
        //this function should return true if given value matches startsWith
        return givenValue[0].toLowerCase() === startsWith[0].toLowerCase();
        
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //return a function, this function takes givenValue
    return function (givenValue){
        //use last character of both. match their case. check if equal.
        return endsWith[endsWith.length-1].toLowerCase() === givenValue[givenValue.length-1].toLowerCase();
        
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // inputs an array, containing string. a function that modifies strings, BUT NOT ARRAYS
    //outputs return an array, where all of its contents have been modified individually by the function
    
    //should increment over array strings, taking each value in it and applying the modify function to it, placing the results in a new array
    //should return the new array
    let newArray = [];
    for (let i = 0; i< strings.length; i++){
        newArray.push(modify(strings[i]));
        
    }
    return newArray;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //inputs an array of strings, and a function that tests string values, returing a boolean
    //outputs a boolean of true if all values in strings passed, or false if any failed
    //a for loop incrementing over strings
    
    // a variable to be set to false if any fail
    let weGood = true;
    for (let i = 0; i<strings.length; i++){
        //pass string at this value to test function. if false, return false
        if (test(strings[i])===false){
            weGood = false;
        }
        
    }
    return weGood;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}