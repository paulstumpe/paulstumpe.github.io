// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//identity has to be a property of object _
_.identity = function(value) {
//takes value
//returns value unchanged
 return value; 

};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string" x
*          - "array" x
*          - "object"
*          - "undefined" x
*          - "number" x
*          - "boolean" x
*          - "null" x
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
//takes any value
//long conditional tests
//iterate from most specific to catch all boolean -> object

    
 //boolean
 if (value === true || value === false) {
     return 'boolean';
 //null
 } else if (value === null) {
     return 'null'; 
 //number
 } else if (value > -Infinity && value < Infinity) {
     return 'number';
 //undefined
 } else if (value === undefined) {
     return 'undefined';
 //string
 } else if (Object.prototype.toString.call(value) == '[object String]') {
     return 'string';
 //array
 } else if (Array.isArray(value)) {
     return 'array';
 //function
 } else if (value instanceof Function) {
     return 'function';
 //object
 } else if (value instanceof Object) {
     return 'object';
 }
 
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
//takes an array
//takes a number

//conditional tests: 
    //test array to see if array is array
    if (!Array.isArray(array) || number < 0) {
       return []; 
    } 
    
    //if number is not a given number or not a number
    //return the first element in array
    //otherwise return that number of elements
    if (number === undefined || Number.isNaN(number) || number === 1) {
        return array[0];
    } else {
        //slice beginning and end 
        return array.slice(0, number);
    }
    
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
//takes an array
//takes a number

    if (!Array.isArray(array) || number < 0) {
       return []; 
    } 
    
    //if number is not a given number or not a number
    //return the last element in array
    //otherwise return that number of elements from end
    if (number === undefined || Number.isNaN(number) || number === 1) {
        return array[array.length - 1];
    //else if number is greater than array length 
    //return array
    } else if (number > array.length) {
        return array;
    } else {
        //slice beginning and end 
        return array.slice(array.length - number, array.length);
    }
    

}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
//takes an array
//takes a value

//return the index of array where value exists
//return -1 if value is not in array
//do not use [].indexOf()!

//EDGE: 
    //what if array has multiple occurances?

    
//default variable
let x = -1;
for (let i = 0; i < array.length; i++) {
    //test to see if val exists
    if (value === array[i]) {
        return i;
    } 
}
return x; 
};




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
//takes an array
//takes a value
//EDGE: did you use ===
    //what if no value is given
    

//return true if array contains value
//return false otherwise
//MUST use ternary operator ?
let exists = 0; 
for(let i = 0; i < array.length; i++) {
  //return true if array contains value? true : false otherwise
  if (value === array[i]) {
      //set exists to true
      exists++;
  }
}

//use ternary
return (exists > 0 ? true: false);
    
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
//takes collection
//takes function called action

    //if collection is an array 
    if(Array.isArray(collection)) {
        //loop through the collection
        for(var i = 0; i < collection.length; i++) {
            //call the function with arguments based on this current index of array
            action(collection[i], i, collection);
        }
    //if collection is not an array (object)
    } else {
        //loop through object prop/keys
        for (var key in collection) {
            //call the function with arguments based on current key position
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


_.unique = function(array) {
//takes an array
//returns a new array of all elements from <array>
//removes duplicates

//loop through array
let newArray = [];
for (let i = 0; i < array.length; i++) {
     if (_.indexOf(newArray, array[i]) === -1) {
       newArray.push(array[_.indexOf(array, array[i])]);
     }
   }
  return newArray;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, action) {
//takes an array
//takes a function

let nA = [];
for (let i = 0; i < array.length; i++) {
    if (action(array[i], i, array) !== true || false) {
      
    } else if (action(array[i], i, array)) {
      nA.push(array[i]);
    } 
  }
return nA; 
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//takes array
//takes function
//output is array
//c must use .filter()
//use _.filter
_.reject = function (array, action){
   //yep should be the result of filter, with filter being fed the opposite of action
   let temp = function (arrayvalue, arrayposition, array){
       //this calls action, gets result of action, and uses bang operator to invert it.
       return !action(arrayvalue, arrayposition, array)
   };
   //this uses filter with an inverted bang operator from temp, to make it akin to reject, and stores the returned array
   let yep = _.filter(array, temp );
   //this returns the stored array produced by filter
   return yep;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//takes array and function
_.partition = function (array, func){
    //
    let trueArray =[];
    let falseArray = [];
    //loop through array
    for(let i = 0; i <array.length; i++){
        //if true
        if (func(array[i],i,array)===true){
            trueArray.push(array[i]);
            
            //if false
        } else if(func(array[i], i, array) === false){
            falseArray.push(array[i]);            
        }
    }
    return [trueArray, falseArray];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action) {
//takes a collection
//takes a function
let nA = [];
//call function for each element in collection passing the arguments:
if (Array.isArray(collection)) {
   for (let i = 0; i < collection.length; i++) {
    //if collection is an array
        //the element, its index, collection
      nA.push(action(collection[i], i, collection));
   }
} else if (collection instanceof Object) {
    //if collection is an object
    for (let key in collection) {
//the value, its key, collection
     nA.push(action(collection[key], key, collection));
//save the return value of each function call in a new array
//return the new array
    }
 }
 return nA; 
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//array input is an array of objects
_.pluck = function(array, property) {
//takes an array of objects
//takes a property

//return an array containing:
//the value of property for every element in array

//we can loop through our array
//and then take all of the values of array[i].property
return _.map(array, a => a[property]);

//you must use map!
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, action) {
//takes a collection
//takes a function

//edge:
//what if function doesn't return a boolean?
//what if function is not given?

if (action === undefined) {

    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (collection[i]) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (collection[key]) {
            result = true;
         }
    }
}
 return result;
}
 //else
 //call function for every element of collection w the parameters:
    //if collection is an array: 
    let result = true;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (!action(collection[i], i, collection)) {
        result = false; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (!action(collection[key], key, collection)) {
            result = false;
         }
    }
    //edge
     //what if function doesn't return boolean
    }
     return result;
    };

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, action) {
//takes a collection
//takes a function

//call function for every array or object
//if array e, i, c
//if obj v, k, c
//if the return value is true for at least one element, return true
//if false for all elements return false
//if function is not provided return true if at least one element is truthy otherwise return false

if (action === undefined) {

    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (collection[i]) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (collection[key]) {
            result = true;
         }
    }
}
 return result;
}
 //else
 //call function for every element of collection w the parameters:
    //if collection is an array: 
    let result = false;
    if (Array.isArray(collection)) {
        //current element, it's index, collection
    for (let i = 0; i < collection.length; i++) {
    //check if it returns true
      if (action(collection[i], i, collection)) {
        result = true; 
     }
     }
    } else if (collection instanceof Object) {
     for (let key in collection) {
    //if collection is an object
    //current value, current key, collection
    //if the return value of calling <function> foor every element is true return true
         if (action(collection[key], key, collection)) {
            result = true;
         }
    }
    //edge
     //what if function doesn't return boolean
    }
     return result;
    };



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(collection, action, seed) {
//an array
//a function
//a seed(?)

//collection is array
//for loop?
//set seed binding 
if (seed !== undefined) {
let previousR = seed;
for (let i = 0; i < collection.length; i++) {
//call the function on every element
  previousR = action(previousR, collection[i], i);
}
return previousR;
} else {
let previousR = collection[0];
  for (let i = 1; i < collection.length; i++) {
//call the function on every element
  previousR = action(previousR, collection[i], i);
  }
  return previousR;
 }
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(object1, object2, ...object3) {
//takes two objects
//possibly more objects

//copy properties from object 2 to object 1
for (let prop in object2) {
   object1[prop] = object2[prop];
 }
 
for (let i = 0; i < object3.length; i++) {
 for (let prop in object3[i]) {
  object1[prop] = object3[i][prop];
  }
 }


//if more objects are passed in copy their properties to object 1 as well (in order)
//return the update to object 1
return object1;

};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
