/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var currentYear = 2015;

var birthYear = 1984;

var monthAge = currentYear - birthYear;

var otherAge = monthAge - 1;

console.log("You are either "+ monthAge + " or  "+ otherAge+"");
