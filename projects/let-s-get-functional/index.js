// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-paulstumpe');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./paulstumpe.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
 //andy's hint, cloud9 has its own debugger we can use.
    //we can put a breakpoint to stop our code at a moment. do this by clicking by line number to make red dot.
    //

var maleCount = function(array) {
//input is an array
//output is a number
//c use 'filter'
//function that tests if value is male

//anonymous function that tests an object for a property value of male.
//this func takes three paramaters, value at i in array, index, the array


    let forFilter = function (element,index,array){
       if (array[index].gender === "male"){
         return true;
       }
    }
return _.filter(array,forFilter).length;
//return number. use length to convert to number

}
//find female customers
//input array
//output number
//c use reduce
var femaleCount = function(array,){
//function for reduce
 //takes arguments previous result, element, index
 //inputs total, element, index
 //outputs total aka num
 function femFilter(pResult, element, index){
  //fem
  let fem = 0;
  if (array[index].gender === "female"){
   fem ++;
  }
  return pResult+fem;
 }
 
  //pass array from femalecount
 //pass a function that returns a number 1 or 0 if female present
 //pass a seed start of 0
return _.reduce(array, femFilter, 0);
};



var oldestCustomer = function (array){
//need to look through array, compare ages saving the location of the current oldest.
//at end return name property at that same object adress
//object adress will be array[x].name
//this will hold index of highest age person
let x = 0;
//loop through array and compare properties
for(let i = 0; i<array.length; i++){
 //if current location has higher age, change x to their index
 if (array[i].age > array[x].age){
  x = i;
 }
}

//return the name property of the person who had the highest age.
return array[x].name; //todo a string of oldest customers name
 
};

var youngestCustomer = function (array){
//need to look through array, compare ages saving the location of the current youngest.
//at end return name property at that same object adress
//object adress will be array[x].name
//this will hold index of lowest age person
let x = 0;
//loop through array and compare properties
for(let i = 0; i<array.length; i++){
 //if current location has younger age, change x to their index
 if (array[i].age < array[x].age){
  x = i;
 }
}

//return the name property of the person who had the lowest age.
return array[x].name; //todo a string of youngest customers name
 
};

var averageBalance = function(array){


 let fin = 0;
 //loop array
 for (let i = 0; i<array.length; i++){
  let fug = array[i].balance.replace(",","");
  fug = fug.replace("$","");
  fug = parseFloat(fug);
  fin= fin + fug;
  
 }
 //manipulate this to be correct decimal after division
let avg = (fin/array.length);

//tofixed returns string. need to switch back to number


 avg = parseFloat(avg.toFixed(2)) - .01;
 console.log(avg);
 
return avg;
};

averageBalance(customers);

var firstLetterCount = function(array, letter){
 // //takes an array and a letter
 // //returns a number
 // //find how many customers names begin with a given letter
 // //counter
 // //use filter
 // let counterArray = _.filter(array, function tester (element, index, array){
 //  //return true if name starts with given letter
 //  // has letter in scope
 //  return array[index]["name"].toLowerCase() === letter.toLowerCase();
  
  
 // });
 
 
 
 // //number to return
 // return counterArray.length;
 
 let counter = 0;
 for (let i = 0; i<array.length; i++){
  if (array[i]["name"][0].toLowerCase() === letter.toLowerCase()){
   counter++;
  }
 }
 return counter;
 
};

var friendFirstLetterCount = function (array, customer, letter){
 //counter of occurances
 let counter = 0;
 //looper
 //customer probably customer name, search array for customer and save to variable
 //use indexof
 let cusIndex = 0;
 //find customer
 for (let i = 0; i<array.length; i ++){
  if (array[i].name === customer){
   cusIndex = i;
  }
 }
 
 for (let i = 0; i < array[cusIndex].friends.length; i++){
  //already have customer, so this is the array of their friends. check for first letter
  if (letter.toLowerCase() === array[cusIndex].friends[i].name[0].toLowerCase()){
   counter ++;
  }
 }
 return counter;
};

var friendsCount = function (array, named){
 
 //returns array of names of people who have 'name' on their friends list
 //iterate through people array, push the name of people who have this persons name on theirs friends list on to
 // the return array
 let myArray = [];
 
 for(let i= 0; i< array.length; i++){
  //now loop this objects friends array
   for (let j =0; j <array[i].friends.length; j++){
    //now check each of these objects name properties to equal name
    if (array[i].friends[j].name ===named){
     myArray.push(array[i].name);
    }
   }
 }
 
 
 return myArray;
 
};


var topThreeTags = function (arr){

let holder = {};
//o find the three most common tags
//tags are in array under the key  tags
//need to tally all possible strings
//so a string should either add 1 to its already declared value, or create itself with a value of 1
//then put the highest of these in array, then the second highest, then the third highest
//could loop through declaring all tags as key properties of an object, with a value of 0
for (let i = 0; i < arr.length; i ++){
 //now look at tags on the current object, which are an array so need another loop
 for (let j = 0; j < arr[i]["tags"].length; j++){
  //take each of these values and assign as a property w value of  0 to holder.
  holder[arr[i]["tags"][j]] = 0;
 }
}
 //done assigning all values as keys with prop of 0 to holder, now tally
//then could loop through, adding the amount of times these key values show up as +=1
for (let i = 0; i< arr.length; i++){
 for (let j = 0; j < arr[i]["tags"].length; j++){
  holder[arr[i]["tags"][j]] ++;
 }
}
 
let highest0 = {brandName : "", amount : 0}
let highest1 = {brandName : "", amount : 0}
let highest2 = {brandName : "", amount : 0}
//loop through holder object for highest 3
//to loop through object do for key in loop
//for top three, loop three times
let currentHighest = {};
for (let i = 0; i<3; i++){
  if(i ===0){
   currentHighest = highest0
   
  
   //need to take out the previouslyu highest from holder object
  }else if (i === 1){
   delete holder[[highest0["brandName"]]]
   currentHighest = highest1
    
  }else if (i === 2){
   delete holder[[highest1["brandName"]]]
   currentHighest = highest2
   
  }
   for (let brand in holder){
    if (holder[brand] > currentHighest["amount"]){
     //now set brand name and amount
     currentHighest.brandName = brand;
     currentHighest.amount = holder[brand];
     
    }
   }
}
//then loop througn new
//input array

//output array
let result = [highest0.brandName, highest1.brandName, highest2.brandName];

 return result;
};
topThreeTags(customers);



var genderCount = function(arr){
 //input array
 //output object, with a key value pair for each gender type and the amount of them
 //have to use reduce
//call reduce for each gendertype, pass a function that returns 0 or 1, if the current locations gender is a match
//return of reduce is the total amount of that gender to be assigned on new object

let myObj = {};
myObj["male"] = _.reduce(arr, function(previousR, element, index){
 if (element.gender === "male"){
  return previousR + 1;
 }
 return previousR;
}, 0);

myObj["female"] = _.reduce(arr, function(previousR, element, index){
 if (element.gender === "female"){
  return previousR + 1;
 }
 return previousR;
}, 0);

myObj["non-binary"] = _.reduce(arr, function(previousR, element, index){
 if (element.gender === "non-binary"){
  return previousR +1;
 }
 return previousR;
}, 0);

return myObj;
 
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
