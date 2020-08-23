var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters(){
    var start = document.querySelector("#main-table-body")
    start.innerHTML="";
    for(var i=0;i<petData.length;i++){
        if((filterType === "Dog" && petData[i].type === "dog") || (filterType === "Cat" && petData[i].type === "cat") || (filterType === "Birds" && petData[i].type === "bird") || (filterType === "")){
            if(petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax){
                var one= document.createElement("tr"); //kickstart things by this first table row
                var two= document.createElement("td"); //subsequently followed by td inside it (one.appendChild(two) will eventually take place)
                var three= document.createElement("img"); //image element introduced
                three.src= petData[i].image.src; //image property
                three.alt= petData[i].image.alt;//image property
                three.height= petData[i].image.height;//image property
                three.width= petData[i].image.width;//image property
                two.appendChild(three); //appending the whole img element inside of table data(td)
               
                var oneA= document.createElement("td"); //a new table data element
                var four= document.createElement("h4");//header inside of it
                var NAME= document.createTextNode(petData[i].name);// a new text node that holds the name from the array
                four.appendChild(NAME); //display the name in the format of a header by appending it to the earlier h4 element
                var DESC= document.createElement("p"); // a new paragraph element that will hold the description
                DESC.innerHTML= petData[i].description; //variable DESC stores this description
               
                var SPAN= document.createElement("span"); //new span element
                var AGE_DISPLAY= document.createTextNode("Age: "); //text node that will be appended to the span element above
                //SPAN.appendChild(AGE_DISPLAY);
                var AGE= document.createTextNode(petData[i].age); //another text node storing the age.this will be appended to the span element
               // SPAN.appendChild(AGE);
                var YEARS= document.createTextNode(" years old.");// another text node containing a phrase. this too will be appended to span
               // SPAN.appendChild(YEARS);
                SPAN.appendChild(AGE_DISPLAY);
                SPAN.appendChild(AGE);
                SPAN.appendChild(YEARS)
               
                oneA.appendChild(four);//append the header name to the new table data element
                oneA.appendChild(DESC); //append the description to the td element too
                oneA.appendChild(SPAN); //append the span to the new td too
                one.appendChild(two); //append the old td element to the table row
                one.appendChild(oneA); //append the new td element to the table row
                
                start.appendChild(one); //append the table row element to the main body after everything has been appended to the tr
            }

        }
        
    }


} //end of this function


function filterDog(){
    filterType="Dog";
    loadTableWithFilters();
}
function filterCat() {
    filterType= "Cat";
    loadTableWithFilters();
}
function filterBird() {
    filterType= "Birds";
    loadTableWithFilters();
}
function filter_zero_1() {
    filterAgeMin=0;
    filterAgeMax=1;
    loadTableWithFilters();
}
function filter_1_3() {
    filterAgeMin=1;
    filterAgeMax=3;
    loadTableWithFilters();
}
function filter_4_plus() {
    filterAgeMin=4;
    filterAgeMax=Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterAllPets(){
    filterType="";
    filterAgeMin=0;
    filterAgeMax= Number.MAX_VALUE;
    loadTableWithFilters();
}

window.onload= function(){
    loadTableWithFilters(); //upon loading, call this function immediately
  }