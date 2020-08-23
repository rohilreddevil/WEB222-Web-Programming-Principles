/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


/*********************************************************************************  
WEB222 – Assignment 01  
I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
No part of this assignment has been copied manually or electrically from any other source (including web sites) 
or distributed to other students. 

Name: Rohil Khakhar	Student ID: 109270173	 Date: 28th January 2018 
 *********************************************************************************/


/*****************************
*Task 1
*****************************/
//Rohil Khakhar- WEB222 Assignment1, Student ID- 109270173
var studentname= "Rohil Khakhar";
var no_of_courses=5;
var course_name= "Computer Programming & Analysis";
var yes= "have";//updated
var no= "don't have"; //updated

//updated output is as follows after the introduction of two new variables// 
console.log("My name is " +studentname+ " and I'm in " +course_name+ " program."+" I'm taking " +no_of_courses+ " courses in this semester and I "+no+" a part-time job now."); 

/*****************************
*Task 2
*****************************/

var current_year= 2018;
var age= prompt("Please enter your age:");
var birth_year= current_year-age;
console.log("You were born in the year of "+birth_year+ ".");
var college_years= prompt("Enter the number of years you expect to study in the college:");
var graduate_year= 2020;
console.log("You will graduate from Seneca college in the year of " +graduate_year+ ".");

/*****************************
*Task 3
*****************************/

var celsius_temp = 30;
var celsius_to_fah = ((celsius_temp*9)/5) +32;
var fahrenheit_temp=60;
console.log(celsius_temp+"°C" + " is " +celsius_to_fah+"°F.");
var fah_to_cel= (fahrenheit_temp-32)*(5/9);
console.log(fahrenheit_temp+"°F"+ " is " +fah_to_cel+"°C.");

/*****************************
*Task 4
*****************************/
var limit=10;
for(var i=0;i<=limit;i++){
  if(i%2==0){
    console.log(i+" is "+"even");
  }
  else{
    console.log(i+" is "+"odd"); 
  }
}

/*****************************
*Task 5
*****************************/

function largerNum(n1, n2){
   var y;// variable declaration
  if(n1>n2){
    y=n1;   
  }
  else{
    y= n2;
  }
return y;
}

var greaterNum= function(integer1, integer2){
  if(integer1>integer2){
     var x= integer1; //declaration and initialization inside the if block
  }
  else{
    x =integer2;
  }
  return x;
} 
var a=4;
var b=6;
var c=5;
var d=7;
var e=1;
var f=2;
var g=8;
var h=10;

//calling these functions TWICE
var result=largerNum(a, b);
console.log("The larger number of "+a+" and "+b+" is "+result+".");
result=largerNum(c, d);
console.log("The larger number of "+c+" and "+d+" is "+result+".");

var output= greaterNum(e,f);
console.log("The larger number of "+e+" and "+f+" is "+output+".");
output= greaterNum(g,h);
console.log("The larger number of "+g+" and "+h+" is "+output+".");

/*****************************
*Task 6
*****************************/

function Evaluator(){
  var sum=0;
  for(var i=0;i< arguments.length;i++){ // arguements.length is  a defualt service provided for evaluating unknown function parameters
    //arguments is the name of the array storing values
    sum += arguments[i]  // adding the marks continuously. overwriting the value of sum by recursive addition of the sum with every iteration(array element)
}
  var avg= sum/arguments.length //outside the for loop
  
  if(avg>=50){
    return true;
  }
  else{
    return false;
  }
} //function concludes here
 var output= Evaluator(20,70);
 if(output){ //if output !=0
   console.log("Passed")
 }
  else{
    console.log("Failed");
 }
 output= Evaluator(60,70,80);
 if(output){
   console.log("Passed")
 }
  else{
    console.log("Failed");
 }
 output= Evaluator (70,40, 90, 60);
  if(output){
   console.log("Passed")
 }
  else{
    console.log("Failed");
 }
  
/*****************************
*Task 7
*****************************/
var Grader= function(score){
  var grade= 'X';
 
if(score >=80 && score<=84){
  grade='A';
   console.log("Your final grade is "+grade+ ". Keep it up");
  
}
else if(score >=70 && score<=74){
  grade='B';
  console.log("Your final grade is "+grade+ ". Push for the top");
  
}
else if(score >=60 && score<=64){
  grade='C';
  console.log("Your final grade is "+grade+ ". Can do better");
  
}
else if(score >=50 && score<=54){
  grade='D';
  console.log("Your final grade is "+grade+ ". Time to pull up your socks big time");
}
else if(score >=0 && score<=49){
  grade='F';
   console.log("Your final grade is "+grade+ ". Play less video games");
}
else{
  
}
return grade;
}

var result = Grader(62);
var result1= Grader(84);
var result2 = Grader (37);

/*****************************
*Task 8
*****************************/
function showMultiples(num, numMultiples){
  var product=1;
  for(var i=1;i<=numMultiples;i++){
    product = num*i;
    console.log(num+" x "+ i+" = "+product);
}
 console.log("--------MULTIPLICATION ENDED--------");
}
var limit =3;
var i=1;
for(i=1;i<=limit;i++){
  var n1= prompt("Enter a number: ");
  var times= prompt("Enter another number: ");
  console.log("Numbers entered are "+n1+" and "+times);
  
 
  showMultiples(n1,times);
}


















