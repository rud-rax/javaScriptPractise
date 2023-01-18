
// Performing a task
function greet(name,age){ // Here "name" is a parameter
    
    console.log("Start of function ");
    console.log("Hello, I am " + name + ", I am " + age + " years old." );
    console.log("End of function");

}


greet();
greet("Rud"); // Here "Rud" is an argument
greet("Billy",9);

// Calculating a value
function square(n) {
    return n * n ; 
}

let sq = square(5);
console.log(sq);
console.log(square(2));
