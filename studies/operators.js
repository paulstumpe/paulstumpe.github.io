// Operators
// Operators are used to act on our data. They can manipulate it, turning 2 
// numbers into a boolean value by comparing them for instance.
// Assignment operators
// Assignment operators are used to change the contents of a variable, from 
// taking it past undefined, to adding on and incrementing
var i = 1+2;
i=+1;
//this is the same as above ++ and -- always reassign the variable to one more 
//or one less what it was before
i++;

// Arithmetic operators
// Arithmetic Operators largely carry out mathematical maniuplations on our data. 
// But they can also act on some non numerical datatypes,
// for instence appending strings together.
1+2-3*4/6%2; //all of the arithematic operators, which work just like their 
//mathematical symbols suggest, except for "%" which returns the remainder of its
//operand divided by its operator.
//and like I showed above, many of these can be combined with the assignment 
//operator to assign the result of performing these operations on a given variable.
i -= 34; //i will be assigned to the previous value of i minues 34.
i --; //i will be assigned to 1 less than it was
i /= 40; //i will be assigned to the result of dividing i by 40
i *=4; //i will be assigned to the result of multiplying i by 4
i %=2; //i will be assigned to the REMAINDER of i divided by 2.
// Comparison operators
//Comparison operators always evaluate for truthiness, by comparing data.
1 < 4; //less than. This resolves to a boolean value, based on whether or not its true.
2==="2"; //strictly equals. this would be false
2 =="2"; //loosely equals. this would be true
2 > 4; //equivalent to less than above, this greater than just goes in the opposite
//direction

// Logical operators
//logical operators allow us to flip the statements testing, like with the bang 
// operator. or can be used to test for the truth of multiple
//statements at once
1<2 && 3<4;
// Unary operators (!, typeof, -)
!true; // "!" This is the bang operator. It inverts the truthiness of the value
//it operates on. False becomes true, true becomes false, and other values like
//zero that are evaluated to a falsey value will be evaluted to a truthy value.
typeof 20; //would return a string of "number." this operator is a tool to find
//the data type of a value.
i = 20;
i = -i; // '-' symbol is the equivalent of multiplying the value by negative one.
// unary operators are a bit special. They only need one argument or piece of data to work with.
// Ternary operator (a ? b : c)
//Ternary is the other side of this. It can take three statements. Could be used 
// similiar to an if statement, in shorter writing.
i ? 20 : console.log("i is twenty"); //this is the same as an if statement
//checking if i equals twenty and printing to the console if it does.
