// write a program to check the second largest number among 3 given numbers and arrange in descending order
num1=10
num2=20
num3=30
if(num1>num2 &&num1>num3){
    if(num2>num3){
        console.log(`${num2} is second largest`);
        console.log(`descending order is ${num1}>${num2}>${num3}`);  
    }else{
        console.log(`${num3} is second largest`);
        console.log(`descending order is ${num1}>${num3}>${num2}`); 
    }
}else if(num2>num1 && num2 >num3){
    if(num1>num3){
        console.log(`${num1} is second largest`);
        console.log(`descending order is ${num2}>${num1}>${num3}`); 
    }
     else{
        console.log(`${num3} is second largest`);
        console.log(`descending order is ${num2}>${num3}>${num1}`); 
    }
     }
   else if(num3>num1 &&num3>num2){
    if(num1>num2){
        console.log(`${num1} is second largest`);
        console.log(`descending order is ${num3}>${num1}>${num2}`); 
    }else{
        console.log(`${num2} is second largest`);
        console.log(`descending order is ${num3}>${num2}>${num1}`); 
    }
   } else{
    console.log("Numbers are equal");
    
   }