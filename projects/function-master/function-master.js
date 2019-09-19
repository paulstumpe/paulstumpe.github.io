//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// i object
//o array
// make array to collect it, and push into it
let arr = []
// for key in loop. 
for (let key in object){
    //push it into the array
    arr.push(object[key]);
}
//return array now that it has values
return arr;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //i object
    //o return string
    // string to store
    let store = ""
    //loop with for key in
    for (let key in object){
        //add key to the string
        store += key+ " "
    }
    //remove last character from string
    return store.trim();

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //i object
    //o string of values, not keys
    //store string
    let store = "";
    //for key in loop, grabbing value, only of strings
    for (let key in object){
        //check if string value at value
        if(typeof object[key] ==="string"){
            //add to store, with a space
            store += object[key] + " ";
        }
    }
    return store.trim();
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //input any datatypes
    //output string array or object
    //if else statements to check types
    //see if array
    
    
    if (Array.isArray(collection) === true){
        return "array";
    } else {
        return "object";
    }
    // see if object
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //i string
    //r string with first capitalized
    
    let newString = string[0].toUpperCase()+string.slice(1);
   
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //in string
    //out string capitalized letters
    //array to collect
    let store = string.split(" ");
    console.log(store);
    //loop through array, applying captilized word
    for(let i = 0; i < store.length; i++){
        store[i]=capitalizeWord(store[i]);
    }
    console.log(store);
    store = store.join(" ");
    // console.log(store);
    // store =store.replace(","," ");
    console.log(store);
    return store;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//access the name property and return it with a welcome string
//console.log(object);
return "Welcome " + capitalizeWord(object['name']) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//access object species and name and return it in string
//console.log(object);
return capitalizeWord(object['name']) + ' is a ' + capitalizeWord(object['species']);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//check to see if object has a noises property with a value of an array
//if sstatement to check if property is defined && length > 0
//if it exists return as string seperated with space
//console.log(object);
if (object.noises === undefined || object.noises.length <= 0) {
    return 'there are no noises';
}
else {return object.noises.join(' ')};
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//use the search method in an conditional statement to determine if word is used
if (string.search(word) >= 0) {
    return true;
}
else {return false};
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//access the objects friends array, and push the name passed into it
//return the object
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//use hasWord function to check object names array
// console.log(object);
// console.log(name);
//conditional to check for property
if (object['friends'] !== undefined) {
return hasWord(object.friends.join(' '), name);
}
else {return false};
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//make an array to push all nonfriends into    
//conditional checks each string in array[index].property array against the name passed
//use the isFriend function in the conditional to check
// console.log(name);
// console.log(array);
let noFr = [];
for (let i = 0; i < array.length; i++) {
    if (isFriend(name, array[i]) === false && array[i].name !== name) {
        noFr.push(array[i].name);
    }
}
// console.log(noFr);
return noFr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//return object with new key and set it to value
// console.log(object);
// console.log(key);
// console.log(value);
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//for loop the array
//use hasOwnProperty on each
//use delete operater to remove it if true
//return object
for (let i = 0; i < array.length; i++) {
    if (object.hasOwnProperty(array[i])) {
        delete object[array[i]];
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//loop through array twice
//check if first loop position against second loop position
//push into new array in the are not strictly equal
//return new array
//let newArr = [];
//console.log(array);
for (let i = array.length; i > -1; i--) {
    for (let j = array.length; j > -1; j--) {
        if (i !== j) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
}
//console.log(array);
return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}