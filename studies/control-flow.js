/**
 * Control-Flow
 * 
 * 
 * 0. In Javascript we can control the way our code runs just like we do in real life using conditional
 * statements or using if and switch statements that exist in javascript
 * 
 * 1. if statements always evaluate to true or false, and they decide to take action based on that evaluation. 
 * the action they take is inside the codeblock. When the if statement is true, it runs the codeblock. if its false, it does nothing
 * 
 * 2. Switch statements can be used in place of if statements in some situations, usually chosen to make the
 * code more legible. If statements compare an input expression with a series of case expressions, and it executes the
 * codeblock under the case statement it first matches. If it matches none of them, it will execute the default
 * statement. the case codeblocks MUST be ended with a break statement.
 * 
 * */
 
//  Control flow
// Control Flow is sort of like the potential forks in the road our programming can take at any point. It's a way of differentiating
// a programs actions based on the current situation, or true or false statements more accurately.
// If
// if statements a block of code that will run only if a certain statement is true at the time we reach it. they're written like this
if (1===1){
    console.log(true);
}
//they're composed of the if key word, a conditional, and then the code block to run if said conditional is true. Otherwise we will
//skip this code block, and move forward in the program.
// Else-if
// else if is another control flow that is appended after a previous if statement. when the first statement evaluates to false, the 
//program will then check if thise code chunk evaluates to false or true
else if (1===2){
    console.log("odd");
}
//they use the same structure as the if statement, but a different key word set. It's important to know they'll never be ran or 
//evaluated if the if statements above them ever evaluate to true. They can be chained on without limit
// Else
// else consists of a code block and key word but no conditional. It can also be added to the end of an if or if else chain if 
// needed. It will be a default statement that will be run if none of the above conditionals evaluate to true.
else{
    "default";
}
// Switch
//Switch is an alternative lingo we can use for the same purposes, though it is more limited. It's advantage is that for some code
//it may be cleaner to write than a very long if else if chain.
let myVariable = "dark";
// First we have the switch keyword, letting the computer know that our following code will be a switch statement
//Inside the parentheses is the expression to search for among our cases.
switch (myVariable) {
    //Inside of the curlybraces we have our first case, the string of "light." If myVariable is equal to this
    //string, then we'll execute the code block inside up until the break statement.
    case 'light':
        //this is the code that will execute if these expressions are equivalent. if not, we will skip this
        //and check the next case, "dark"
        console.log("it's light");
        //this is the break statement. This is NEEDED to tell the computer to stop running the codeblock.
        //Missing a break statement will not give you appropriate results, if not outright breaking your program.
        break;
    case 'dark':
        console.log("it's dark");
        break;
    //this is the default statement. It will be ran if our input expression does not match any of the case statements
    //we have provided above.
    default:
        // code
}
//this is most useful for all possible conditions for a variable, in my opinion.