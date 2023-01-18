

// TWO TYPES OF VARIABLES 
//      1 PRIMITIVE / VALUE TYPES
//      2 REFERENCE TYPES

// PRIMITIVE TYPES 
//      1 String
//      2 Number
//      3 Boolean
//      4 undefined
//      5 null



let nickname = "Rud" ; // String literal
console.log(nickname);

let age = 21 ; // Number literal
console.log(age);

let isSuccess = true ; // Boolean literal
console.log(isSuccess);

let firstname = undefined ; // set to undefined by default
console.log(firstname);

let lastname = null ; // like None in Python
console.log(lastname);


console.log(typeof nickname);

nickname = 1 ;
console.log("Nickname variable is of type = " + typeof nickname);

age = 21.5;
console.log("Age is varible of type = " + typeof age);

// Floats and Integer as of same type called numbers

console.log("Type of variable firstname = " + typeof firstname);

console.log("Type of variable lastname = " + typeof lastname);


// REFERENCE TYPES
//      1 Object
//      2 Array
//      3 Function


// Creating an object

let person = {
    name : "Rud" ,
    age : 21
};

console.log(person);
console.log("Type of variable person = " + typeof person);
console.log("Type of variable person.name = " + typeof person.name);


// Dot Notation
console.log("Name of the person = " + person.name);
person.name = "ha5hkat" ;
console.log("Changed Name of the person = " + person.name);

// Bracket Notation
person['name'] = "Rudraksh";
console.log("Changed name of the person = " + person['name']);

selection = 'name' ;
console.log("Name of the person is " + person[selection]);







