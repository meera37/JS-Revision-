//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "June"
if(month =="September" ||month == "October" ||month == "November"){
    console.log('the season is Autumn.');   
}else if(month =="December" || month =="January" || month =="February" ){
    console.log("the season is Winter.");  
}else if(month =="March"||month == "April"|| month =="May"){
    console.log("the season is Spring");  
}else{
    console.log("the season is Summer");
    
}