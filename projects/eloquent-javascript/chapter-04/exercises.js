////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //if first is second than first return, and return null
  if (end < start){
    return null;
  }
  //if equal return empty arr
  if (end ===start){
    return [];
  }
  
  //count from start to end, including start and end
  //hold new array
  let arr = [];
  if (step === undefined){
    step = 1;
  }
  if (step < 0){
    return[];
  }
  for(start;start<end+1;start+=step){
    arr.push(start);
    
  }
  //retrun array
  return arr;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //add all values in array
  let sum = 0;
  //if array literal, return 0
  if (array.length===0){
    return sum;
  }
  //loop, add, store in array
  for(let i = 0; i<array.length;i++){
    sum+=array[i];
  }
  //return final sum
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  // takes array, reverses it
  //containter
  let container = [];
  //loop through array
  for(let i = 0; i<arr.length; i++){
    //unshift into place
    container.unshift(arr[i]);
  }
  //return it
  return container;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //need to change the ordering of array
  //need to loop over using a method to move where the items are on the array
  //need to work out from middle, since we're flipping it
  //middle of array would be array length divided by 2, rounded down
  //if even, could insert pivot point, pivot,then remove.
  //need to use both i and negative i, as i work my way out
  // stop at half of array length. aka same as middle point.
  //check if array even length
  //take furthest left, put it in x
  //take furthest right, put it in y
  // write x to furthest right
  // write y to furthest left
  // increment in by one on both sides
  // if both incrementer are equal, stop
  let x =0;
  let y = 0;
  let j = array.length-1;
 
 
  
   if (array.length===0){
      return array;
    }
  for (let i =0; i <= Math.max((array.length-1)/2); i++){
    x = array[i];
    y = array[j];
    //replace array[i] with y
    array.splice(i,1,y);
    array.splice(j,1,x);
    j--;
    
    //replace array[j] x
   
  }

  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //takes array
  //returns list version of the array

  let myObject = {};
  let currentObject = myObject;
  for (let i=0; i<array.length; i++){
    currentObject.value = array[i];
    if (i===array.length-1){
      currentObject.rest = null;
    } else {
      currentObject.rest = {};
      currentObject = currentObject.rest;
    }
  }
  console.log(myObject);
  return myObject;
  
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // looking at an object i'll be starting with the first value, so i need to
  //push the stuff onto my new array
  //to hold my array as i build it
  let myArray = []
  //need to look down through object and add to list as I go
  //conditional based on .rest equalling null
  //currentobject to track us
  for(let currentObject = list; currentObject !== null; currentObject = currentObject.rest){
    myArray.push(currentObject.value)
  }
  
  
  //will return array
  return myArray;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//inputs an element, and a list
//outputs new list, with this element at the top of the inputs list

function prepend(element, list) {

let myObj = {};

//needs property of list, and property of element
myObj.value = element;

myObj.rest = list;

//return new list object
return myObj;

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
//input takes list and a number
//ouptu returns the element at the given position in the list, with the list using
//a zero base index/ or returns undefined if there is no element
let tracker = list;
if (num<0){
  return undefined;
  
}
for(let i =1; i<=num; i++){
tracker = tracker.rest;
}
//the value property at whatever tracker is currently attached to
return tracker.value;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
  
  // check if both are objects and if both dont equal null
  if (typeof a === "object" && a !==null &&typeof b === "object" && b !== null){
    //this means both are objects, lets deep compare!
    
    //hint: instructions recomend obj.keys function
    
    //recursion bad case
    
    //recursion  base case/ aka we're done case
    
    //recursion  recursion case, keep going= simply put, our function calling
    //itself. one of the arguments our function takes should always be dependent
    //on the previous calling of the function I believe. should also be changing
    //the arguments given this time from the arguments we started with or we'd
    //go on infinitely right?
    
    // see if a at key in is equal to b at that key,
      //but if both are objects and not null, do this again to those objects
        //infinitely until equal base values
          //edge case what if object literal/ aka no key value pairs to compare?
    //need an if statement to only end up on recursion when these values are object
    for ( let key in a){
      //check if b has the key a has using has own property
      if (key in b){
       //has key key, now check if key is an object
       if (typeof a[key] === "object" && a[key] !==null &&typeof b[key] === "object" && b[key] !== null){
         //recurse here
         return deepEqual(a[key], b[key]); 
         
       } else {
         //this key is a normal value, lets keep track of equality
          if (a[key]!== b[key]){
            return false;
          }
       }
      }
    
    }
    //everything was equals to reach this line
    return true;
  
  } else { 
    //one isn't an object so strictly equal
    if (a===b) {
      //they're equal return true
      return true;
    } else {
      // they aren't equal, so false
      return false;
    }
  }
  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
