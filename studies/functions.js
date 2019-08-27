// Functions
//Functions are a data type that hold expressions. They can be passed arguments, set as parameters when we declare the function, and run
//the code blocks we put inside them when we called. They can also be passed around and assigned without being called as variables.
var myFunction = function (){
    console.log("hello");
};
// The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
//First we must declare the function. Then, we can call call the function, like so
myFunction();
//The inclusion of these parentheses are a key part of the syntax to calling a function, even if we pass no arguments.
// What’s the difference between a function’s parameters and arguments PASSED to a function?
//parameters are the preset spaces for where we will evenutally pass arguments. They're used in our declaration of the funtion.
//arguments are the real values we will actually give to the function when we call it.
// What’s the syntax for a NAMED function?
var myFunction3 = function (){
    console.log("3");
}
// How do we assign a function to a variable?
// see above.
// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
// inputs are specified in the parameters when we craft a function, and in the parentheses more specifally. we then use parenthese to pass arguments.
//outputs are specified using the key word return.
var myFunction10 = function (){
    return "hello"
}
// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
// Javascript has lexical scope. Our fuctions and code see everything to their left, of which they're a part. but the stuff to the left can not see the stuff
//indented towards the right, more or less. we can see up and out. but we can not look down and in.
// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory 
// somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
// (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
// Closures are odd, but basically they ensure variables are stored specially, when they have been inside the scope of a funtion
// we have used, even if the codeblock they were in was never used or has not been used recently.
//its an important part of the way our functions lexical scope looks up and out.
var myFunction20 = function (hello){
    return function (passes){
        passes +"" + hello;
    }
}
var myFunctionFactory = myFunction20("happy")
var myMood= myFunctionFactory("whats my mood?");
console.log(myMood);