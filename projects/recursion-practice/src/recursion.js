// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //take, multiply it by one less of it, stopping at zero
  if (n< 0) {
    return null;
    
  }
  //base case
  if (n === 0){
    return 1;
  }
  //call on self, increment
  return n * factorial(n-1);
  
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base condition
  if(0===array.length){
    return 0;
  }
  //get first element
  let n = array[0];
  //remove element I retrieved
  array = array.slice(1);
  //add retrieved plus recursive call
  return n + sum(array);
  // adding zero index element + recursive call
  //array s
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if number is negative
  if (n<0){
   n = n *-1; 
  }
  
  // base case
  
  if (n=== 0 || n ===1){
    return n === 0;
  }
  //base case is when number is 0 or 1
  //check if number is even
  //recurse
  n = n-2;
  return isEven(n);
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //
  //base case n === 0
  if (n === 0){
    return n;
  }
  //recursive for negative
  if (n < 0){
  n = n+1;
  return n + sumBelow(n);
  }
  //recursive for positive
  if (n > 0){
  n = n-1;
  return n + sumBelow(n);
  }
    
  };

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  if (y === x){
      []
    }
  if ( y < x ){
    x-=1;
    if (y ===x){
      return []
    }
    return [x].concat(range(x,y));
  }
  if (x===y||x===y-1){
    return []
  }
  x +=1;
  return [x].concat(range(x,y));
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 1){
    return base;
  }
  if (exp === 0){
    //will reach if we use negative, do i need a negative one edge case catch?
    return 1;
  }
  if (exp > 0){
    //do positive
    //int multiplying by itself the amount of times that is exponent.
    //means exponent has to be the increment value
    //when exp reaches one, it will return itself one more time.
    exp--;
    return base * exponent(base,exp);
  }
  if (exp < 0){
    //do negative
    exp *= -1;
    let expNeg = base * (exponent(base, exp -1));
    return 1 /expNeg;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case is 1
  if (n ===0){return false;}
  if (n === 1){
    return true;
  } else if (n % 2 !== 0){
    return false;
  }
  
  n = n/2;
  return powerOfTwo(n);
  //divide continuosly by 2, 
  // if number is ever odd, false
  //if number reaches 1, it is
  
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //basecase is string length of one
  if (string.length === 1){
    return string;
  }
  //char to use
  let use = string[string.length-1];
  //string to call recurisevly
  string = string.slice(0,-1);
  return use + reverse(string);
  
  //take last charcter from array and then set string to string minus one letter
  //and add that as argument to a recursive call
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case string length of 1 or 0
  string = string.toLocaleLowerCase();
  string = string.replace(" ", "");
  if (string.length === 1 || string.length === 0){
    return true;
  }
  //check if last and first character are equal
  if (string[0] !== string[string.length-1]){
    return false;
  }
  //subtract both
  string = string.slice(1);
  string = string.slice(0,-1);
  return palindrome(string);
  
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (x<0){
    x = x - x - x;
    y = y - y - y;
  }
  if (x === 0){
    return 0;
  }
  x = x-1;
  return y + multiply(x,y);
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case 2, str 1 does not equal str 2 at char
  
  if (str1[0] !== str2[0]){
    return false;
  }
  //final base case, length is 1 and both string characters are equal

  if(str1 === "" && str2.length >= 1){
    return false;
  } 
  if(str1.length >= 1 && str2 === ""){
    return false;
  }
  if (str1 === "" && str2 === ""){
    return true;
  }
  //recursive element
  //decrement both str 1 and str 2
  str1 = str1.slice(1);
  str2 = str2.slice(1);
  //callcompare str with these as arugments
  return compareStr(str1, str2);
  
  
};
compareStr("hello", "hello");

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case 
  //str = string literal.
  //means, we're done
  if (str.length === 0){
    return [];
  }
  
  //recursive case
  //take first value in variable
  let element = [str[0]];
  //set string to new string with it sliced away
  str = str.slice(1);
  //should concat upcoming results onto variable
  return element.concat(createArray(str));
  
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(array.length === 1){
    return array;
  }
  let part = [array[array.length-1]];
  array = array.slice(0, array.length-1);
  return part.concat(reverseArr(array));
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // end condition is length =1
  if (length ===1){
    return [value];
  }
  length = length -1;
  return [value].concat(buildList(value,length));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //count the amount of times a value shows up
  //end condition is array being 1
  if (array.length ===1){
    if (array[0] === value){
      return 1;
    } else {
      return 0;
    }
  }
  //tally total in return, increment
  if(array[0] === value){
    array = array.slice(1);
    return 1 + countOccurrence(array, value);
  } else {
    array = array.slice(1);
    return 0 +countOccurrence(array, value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback){
  if (array.length === 1) {
    return [callback(array)];
  }
  
  //new array stored in return
  let result = [callback(array[0])];
  array = array.slice(1);
  return result.concat(rMap(array, callback));
  

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//0+1, 1 1+1

var nthFibo = function(n) {
  // 0 0 0
  // 0 1 1
  // 1 1 2
  // 1 2 3
  // 2 3 5
  // 3 5 8
  // 0+1 1+1 1+2
  //we increment around n, working n down to zero
  //but the meaning of n needs to be abstracted to work in the recursive calls
  //idk how to increment against anything other than what we're passing each call.
  //and we're only passing n
   //but thats okay because we'll start at bottom and calculate out
  //so subtract down, and calculate out once i'm at bottom
  //n is just how many times we go down before we starting doing the fibonacci calculation
  //
  
//   int fib(int n) 
// { 
if (n<0){
  return null;
  
}
  if (n <= 1){
    return n;
  }
  return nthFibo(n-1) +nthFibo(n-2);
//     if (n <= 1) 
//         return n; 
//     return fib(n-1) + fib(n-2); 
// } 
  
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base case array length = 1
  if (input.length === 1){
    return input[0].toUpperCase();
  }
  //recursive statement
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
//double check everything is in array
//store in return
//capitalize first letter of each word
//end
  if (array.length === 1){
    //split word into two strings in an array
    let firstletter = array[0][0].toLocaleUpperCase();
    let rest = array[0].slice(1);
    array = array.slice(1);
    let word = firstletter + rest;
    let otherArray = [word];
    return otherArray;
  }
   let firstletter = array[0][0].toLocaleUpperCase();
    let rest = array[0].slice(1);
    array = array.slice(1);
    let word = firstletter + rest;
    let otherArray = [word];
    return otherArray.concat(capitalizeFirst(array));
  
};
capitalizeFirst(["hello", "what's up"])

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  //each letter that occurs, add one to a key for it
  if (obj === undefined){
    let obj = {}
     if (str.length === 1){
let letter = str[0];
  if (obj[letter] === undefined){
    obj[letter] = 1;
  } else {
    obj[letter] = obj[letter] + 1;
  }
  str = str.slice(1);
  return obj;  
  }
  let letter = str.charAt(0);
  if (obj[letter] === undefined){
    obj[letter] = 1;
  } else {
    obj[letter] = obj[letter] + 1;
  }
  str = str.slice(1);
  return letterTally(str, obj)
  }
  if (str.length === 1){
let letter = str[0];
  if (obj[letter] === undefined){
    obj[letter] = 1;
  } else {
    obj[letter] = obj[letter] + 1;
  }
  str = str.slice(1);
  return obj;  
  }
  let letter = str.charAt(0);
  if (obj[letter] === undefined){
    obj[letter] = 1;
  } else {
    obj[letter] = obj[letter] + 1;
  }
  str = str.slice(1);
  return letterTally(str, obj)
  
  
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  let newList1 = [];
  let newList2 = [];
  let alt = [list[0]];
  if (list.length <= 1){
    if (alt === list[1]){
      newList1 = list.slice(1);
      return newList1;
    }
    return list;
  }
  if (list[0] === list[1]){
    newList1 = list.slice(1);
    return [].concat(compress(newList1));
  }
  newList1 = list.slice(1);
  return alt.concat(compress(newList1)); 
};
compress([1,1,2,3,4,4,6]);
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  //go through list
  if (array.length===1){
    array[0].concat([aug]);
  }
  
  // structure is array, of arrays [][]
  array[0].concat(5)
  //remove first index
  
  let newArray = array.splice(1)
  // augmenter should do what tho?
  return newArray.concat(augmentElements(array, aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //if current value is a zero, check if next value is 0 and remove it, then run
  //as if fresh
  if (array.length === 1){
    return array;
  }
  let cur = array[0]
  let nex = array[1]
  let newArray = [];
  if (cur === 0 && nex === 0){
    newArray = array.slice(1);
    return [].concat(minimizeZeroes(newArray));
  }
  newArray = array.slice(1);
  return [cur].concat(minimizeZeroes(newArray))
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //need to iterate the array backwards
  //slice from back of array to set new array
  let newArray;
  let curValue;
  if (array.length === 1){
    newArray = [];
    curValue = array[0];
    if (curValue < 0){
      curValue= curValue * -1;
    }
    return [curValue];
  }
  curValue = array[array.length-1];
  if (array.length % 2 ===1){
    if(curValue < 0){
      curValue = curValue * -1;
    }
  }
  if(array.length % 2 ===0){
    if(curValue > 0){
      curValue = curValue * -1;
    } 
  }
  newArray = array.slice(0,array.length-1);
  return alternateSign(newArray).concat([curValue]);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //base case if length is one
  let newChar;
  if (str.length === 1){
    if (!isNaN(str[0])){
      switch (str[0]){
        case 0:
          newChar = "zero";
          break;
        case 1:
          newChar = "one";
          break;
        case 2:
          newChar = "two";
          break;
        case 3:
          newChar = "three";
          break;
        case 4:
          newChar = "four";
          break;
        case 5:
          newChar = "five";
          break;
        case 6:
          newChar = "six";
          break;
        case 7:
          newChar = "seven";
        case 8:
          newChar = "eight";
          break;
        case 9:
          newChar = "nine";
          break;
          
          
      }
      return newChar;
    } else {
      return str[0];
    }
  }
  if (!isNaN(str[0]) && str[0] !== " "){
    let testchar = parseInt(str[0]);
      switch (testchar){
        case 0:
          newChar = "zero";
          break;
        case 1:
          newChar = "one";
          break;
        case 2:
          newChar = "two";
          break;
        case 3:
          newChar = "three";
          break;
        case 4:
          newChar = "four";
          break;
        case 5:
          newChar = "five";
          break;
        case 6:
          newChar = "six";
          break;
        case 7:
          newChar = "seven";
        case 8:
          newChar = "eight";
          break;
        case 9:
          newChar = "nine";
          break;
          
          
      }
      str = str.slice(1);
      return newChar +numToText(str);
    } else {
      newChar = str[0];
      str = str.slice(1);
      return newChar + numToText(str);
    }
  
  
  //check if a character in string is a number 1 through 9
  //if it is, translate charcter to word version, and insert that before next
  //character
  
  
  
  // stores answer
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
