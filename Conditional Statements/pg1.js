//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough
//  to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = 17
console.log(`Enter your age: ${age}`);
if(age>=18){
    console.log("You are old enough to drive");  
}else{
    let years = 18 - age
    console.log(`number of years required to wait for driving is ${years}`);
    
}
//ternary
years = 18 - age
age>=18?console.log("You are old enough to drive"):console.log(`number of years required to wait for driving is ${years}`);


//to get user input in the terminal - need for installation in node
//const readline = require("readline-sync"); // Import readline-sync
//let age = Number(readline.question("Enter your age: ")); // Get user input



// prompt() works on browser console only
//let age = prompt("Enter your age:");  // Get user input
//age = Number(age);  // Convert input to a number