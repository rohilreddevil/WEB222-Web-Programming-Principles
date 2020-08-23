// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];
var numbers= [1,2,3,4,5,6];
var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
//FRUITS SECTION
window.onload= function(){
    var mycontainer= document.querySelector("#FRUIT");
    fruits.sort();
    numbers.sort();
    for (var i=0;i<fruits.length && numbers.length;i++){
      
            mycontainer.innerHTML +=  numbers[i] + ". " +fruits[i] + "<br/>";
    }
  //DIRECTORY SECTION
        var i=0;
        if(directory[i].type=="file"){
        var container1= document.querySelector("#one");
        container1.innerHTML+= directory[i].name+ "<br/>";
        
        var container2= document.querySelector("#two");
        container2.innerHTML+= directory[i+1].name+ "<br/>";
          
        }
        i+=2;    
        if(directory[i].type=="directory"){
                var container3= document.querySelector("#three");
                
                container3.innerHTML= directory[i].name; 
            }
           i=2;
            if(directory[i].name="HTML Files"){
            var container3a= document.querySelector("#threeA");
               container3a.innerHTML+= directory[i].files[0].name;
            var container3b= document.querySelector("#threeB");
              container3b.innerHTML+= directory[i].files[1].name;
            }
       
            var container4= document.querySelector("#four");
            container4.innerHTML+= directory[3].name+ "<br/>";
       
            var container5= document.querySelector("#five");
            container5.innerHTML+= directory[4].name+ "<br/>";
            i=4;
           if(directory[i].name=="JavaScript Files"){
               var container6= document.querySelector("#six");
              container6.innerHTML+=directory[i].files[0].name;
              var container7= document.querySelector("#seven");
              container7.innerHTML+= directory[i].files[1].name;
              var container8= document.querySelector("#eight");
              container8.innerHTML+= directory[i].files[2].name;
            } 
        
        }; 




    

