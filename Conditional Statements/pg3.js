//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//using if else
let a = 100056
let b = 123456789
if(a>b){
    console.log("a is greater than b");
    
}
else if(a<b){
    console.log("a is less than b");
    
}else{
    console.log("Both Same Number");
    
}
//ternary operator.
a>b?console.log("a is greater than b"):a<b? console.log("a is less than b"): console.log("Both Same Number")