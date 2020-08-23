function formCheck(){
    if(unameCheck()==true && passCheck()==true && rePassCheck()==true) //if all 3 functions work successfully
       return true;
   else
       return false;

}    

function unameCheck(){
   var uname = document.getElementById("username");
   var msg = document.getElementById("errormessage");
   var strTest = uname.value.trim(); //removes the spaces betweeen the strings
   var NumOfChar = strTest.length; //length property
   var isnD = false; //bool value
    var TRIM= uname.value.trim();
   if(!msg.length){
       msg.innerHTML=""; //empty string
   }


   if(TRIM.charAt(0)==isNaN){//if the string is not a number
       isnD = true; //username validated successfully
   }else{
       alert("Oops!!! Try Again"); //if validation fails   
       msg.innerHTML="Username must start with a letter and at least 8 characters";//error message
       uname.focus(); //give focus to an element
       return false;//validation failed, form won't be submitted
   }  

   if(NumOfChar>=6){ //if the length is equal to or greater than the minimum limit 
       return true; //success

   }else{

       alert("Oops!!! Try Again");    
       msg.innerHTML=("Username must start with a letter and at least 8 characters");
       uname.focus();
       return false;
       }  
}    

function passCheck(){   
var pwrd = document.getElementById("password");
var strTest=pwrd.value.trim(); //space trimmer
var NumOfChar = strTest.length;
var msg = document.getElementById("err_message");
var upCase=false;
var loCase=false;
var num=false;
var flag =1;
if(!msg.length){//if the length is not equal to zero
       msg.innerHTML="";
   }
if(strTest.toLowerCase()!= strTest){
   upCase = true; //if the string isn't lower case, it means it is uppercase
}else{
   alert("Oops!!! Try Again"); 
   msg.innerHTML=("Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
   pwrd.focus();
   return false;   
}

if(strTest.toUpperCase()!= strTest){//if the string isnt upper case, it must be lowercase
loCase= true;
}else{
   alert("Oops!!! Try Again"); 
   msg.innerHTML=("Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
   pwrd.focus();
   return false;   
}

for(var i=0; i<strTest.length && flag;i++){
   if(strTest.charAt(i)>="0" && strTest.charAt(i)<="9"){
       num=true;
       flag=0;alert("3");
   }

}

if(num==false){
   alert("Oops!!! Try Again"); 
   msg.innerHTML=("Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    pwrd.focus();
    return false;
} 


if(NumOfChar>=8){ //if the length is equal to or greater than the minimum limit 
    return true; //success

}else{

    alert("Oops!!! Try Again");    
    msg.innerHTML=("Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    uname.focus();
    return false;
    }  
}    


function rePassCheck(){
    var repwrd = document.getElementById("repwrd");
    var pwrdValue = document.getElementById("password").value.trim(); //selecting the password
    var repwrdValue = repwrd.value.trim();
    var msg = document.getElementById("errormessage");
    if(!msg.length){ //if length is not equal to zero
            msg.innerHTML="";    
        }
    if(pwrdValue == repwrdValue){
        alert("Passwords match!"); 
        return true;
    }else{
        alert("Error"); 
        msg.innerHTML=("Passwords do not match");
        repwrd.focus();
        return false;  
        }
    }

