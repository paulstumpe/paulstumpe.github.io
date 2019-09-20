// Loops
//loops let us look through the entirety or some of a multiple data storing data 
// type/aka complex datatype. Or break simple data
//types into their parts and look over their entirety. They also allow us to 
// repetetively do other things. Basically, iteration in
// code.
// Explain while, for, and for-in loops
//while loops will go as long as the condition we state evaluates to true at the 
// end of the codeblock
var apple =5;
while  (1 < apple){
    apple -1;
}
//for loops use a triple set of info in their parentheses. a start condition, an 
// end/stop condition, and an incrementer.
for(var i=0; i<10; i++){
    console.log("hi"); //will say hi ten times.
}
//for in loops are special loops useful for iterating objects. since objects 
//don't use a numeric index in the same way arrays do
//for in loops will let us look over each key value pair in the object.
var myObject= {apple : 4, oranges : 10, monkeys : 50};
for (var key in myObject){
    console.log(key+myObject[key]);
}
// Be able to loop any number of times, forward counting up to some limit, backward 
// counting down to 0
for(var i=0; i<20; i++){
    console.log("20 times");//loops twenty times
}
for(var i = 5; i>=0; i--){
    console.log(i) //counts down to zero;
}
// Loop over an Array, forwards and backwards
var myArray = [1,2,3,4,5]
for(var i=0; i <= myArray.length-1; i++){
    console.log(myArray[i]);
}
for (i=myArray.length-1; i>=0; i--){
    console.log(myArray[i]);
}
// Loop over an Object
for (var key in myObject){
    console.log(key);
}