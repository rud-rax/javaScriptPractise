const prompt = require('prompt-sync')();


// VARIABLE RULES
// Cannot be a reserved keywords
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

var name = prompt("Enter name : ");
let age = prompt("Enter age : ") ;

console.log("Hi ",name);
console.log("Your age is ",age);
