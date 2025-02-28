//Write a code to print numbers from 1 to 10 :
for(i=1;i<=10;i++){
    console.log(i);
    
}
console.log('----------------------------------');

//print only even numbers between 0 and 20
for(j=1;j<=20;j++){
    if(j%2==0){
        console.log(j) 
}
}
console.log('----------------------------------');
k=20
while(k>0){
    if(k%2==0){
        console.log(k);
        
    }
    k--
}
console.log('----------------------------------');
// w a p to find the sum of all odd numbers between 1 and 10 using while loop
sum=0
m=1
while(m<=10){
    if(m%2!=0){
        sum = sum +m
    }
    m++
}
console.log(sum);