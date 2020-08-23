/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/********************************************************************************* 
*  WEB222 – Assignment 02 *  
*I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
* 
*  Name: _Rohil Khakhar______________________ Student ID: _109270173_______________ Date: _20th February 2018_______________ 
* 
********************************************************************************/



/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [    // array of objects
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

//var CustomerDB= my Object();

 var CustomerDB= {
    customers:[], 
    addresses:[], 
    stores:[],
    insertData:function(allData){   //1
    for(var i=0;i<allData.length;i++){
        if(allData[i].type=="customer"){
            
            CustomerDB.addCustomer(allData[i]);
        }
    }

     for(var i=0;i<allData.length;i++){
        if(allData[i].type=="address"){
           
            CustomerDB.addAddress(allData[i]);
        }
    }

     for(var i=0;i<allData.length;i++){
        if(allData[i].type=="store"){
            
            CustomerDB.addStore(allData[i]);
        }
    }
    
},
addCustomer:function(customerObj){ //2
       customerObj.data.add_date= new Date();
        CustomerDB.customers.push(customerObj); //pushing th customer object from allData into the newly created object
       // console.log(CustomerDB);
},
outputCustomerById:function(customer_id){ //3
    for(var i=0; i< CustomerDB.customers.length;i++){
        if(customer_id== CustomerDB.customers[i].data.customer_id){ //customers array
           	var	id = CustomerDB.customers[i].data.customer_id;
				var Name = CustomerDB.customers[i].data.first_name;
				var	last = CustomerDB.customers[i].data.last_name;
				var	email  = CustomerDB.customers[i].data.email;
					
				var	customer = 'Customer ' + id + ': ' + Name + ' ' + last + ' (' + email + ')';
					
				var	address = 'Home Address: ' + CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id);
					
				var	date  = 'Joined: ' + CustomerDB.customers[i].data.add_date;

					
					var details = customer + '\n' + address + '\n' + date;
					
					return details;            
				} 
           
    }
},

outputAllCustomers:function(){ //4
    console.log("All Customers");
    console.log("\n");
   
    for(var i=0; i<CustomerDB.customers.length;i++){
      console.log(CustomerDB.outputCustomerById(CustomerDB.customers[i].data.customer_id));
			}
		},  
        
 
  outputCustomersByStore:function(store_id){ //5
   for(var i=0;i<CustomerDB.stores.length;i++){
    console.log("Customers in Store:" + CustomerDB.stores[i].data.name);
   console.log("\n");
    for(var i=0;i<CustomerDB.stores.length;i++){
   
    
    for(var i=0; i<CustomerDB.customers.length;i++){
         var call= CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id);
    }      
 
    for(var i=0;i<CustomerDB.customers.length;i++){
        if(store_id== CustomerDB.customers[i].data.store_id){
    console.log("Customer: "+ CustomerDB.customers[i].data.customer_id+ " :" +
                        CustomerDB.customers[i].data.first_name, CustomerDB.customers[i].data.last_name + "(" + 
                        CustomerDB.customers[i].data.email + ")");
    console.log("Home address: " + call + CustomerDB.addresses[i].data.city+ CustomerDB.addresses[i].data.province + ". " + CustomerDB.addresses[i].data.postal_code);            
    console.log("Joined: "+CustomerDB.customers[i].data.add_date);
    console.log("\n");    
    }      
    }        
    }
   } 
},
    
removeCustomerById:function(customer_id){ //6
    for(var i=0;i<CustomerDB.customers.length;i++){
        if(customer_id==CustomerDB.customers[i].data.customer_id){
            
            CustomerDB.customers.splice(i,1); //removes one customerid with every passing index in the for loop
        var remove=CustomerDB.removeAddressById(CustomerDB.customers[i].data.address_id);
        }
       
    }
},

addAddress: function(addressObj){  //7
    CustomerDB.addresses.push(addressObj);
},


getAddressById:function(address_id){ //8
    var Address;
    
    for(var i=0; i< CustomerDB.addresses.length;i++){
        if(address_id == CustomerDB.addresses[i].data.address_id){
            Address= CustomerDB.addresses[i].data.address; //the address for the corresponding id
        }
    }
    return Address; //returns the corresponding address for that id

},

outputAllAddresses:function(){ //9
    
    console.log("All Addresses");
    console.log("\n");
    
     for(var i=0; i<CustomerDB.addresses.length;i++){ //until there are no more addresses in the address object left
       
         var id= CustomerDB.addresses[i].data.address_id; // stores address id's in a variable
         var getAdd= CustomerDB.getAddressById(CustomerDB.addresses[i].data.address_id);// gets the address from the appropriate function
         var city= CustomerDB.addresses[i].data.city;
         var province= CustomerDB.addresses[i].data.province;
         var postal= CustomerDB.addresses[i].data.postal_code;
     
         console.log("Address "+ id +": "+ getAdd + " " +city +", " + province+ ". " + postal);
         console.log("\n");
     }      
    
},

removeAddressById:function (address_id){ //10
    
    var keepLooking=0;
    for(var i=0;i<CustomerDB.customers.length;i++){
        if(address_id== CustomerDB.customers[i].data.address_id){
//this means that the address id is referenced by a customer object            
            keepLooking ++; //this item shall not be removed. thus the tracker needs to keep searching
        }
    }
    
    for(var i=0;i<CustomerDB.stores.length;i++){
        if(address_id==CustomerDB.stores[i].data.address_id){
            //this means that the address id is referenced  by a store object. 
            keepLooking++; //shall not be removed. keep looking for an unreferenced value
        }
    }
    
    if(keepLooking<=1){
    
        for(var i=0;i<CustomerDB.addresses.length;i++){
            if(address_id==CustomerDB.addresses[i].data.address_id){
                CustomerDB.addresses.splice(i,1);
        }
    }
    
    }       
},

addStore:function(storeObj){ //11
        //allData.data.add_date= Date();
        CustomerDB.stores.push(storeObj);
       
},

getStoreById:function (store_id){ //12
    var storename;
    for(var i=0;i<CustomerDB.stores.length;i++){
        if(store_id==CustomerDB.stores[i].data.store_id){
            storename= CustomerDB.stores[i].data.name;
        }
    }
return storename;

},

outputAllStores:function(){ //13
    console.log("All Stores");
    console.log("\n");
    
    for(var i=0;i<CustomerDB.stores.length;i++){
        
        var name= CustomerDB.stores[i].data.name; //store name retrieved
        var st_id= CustomerDB.stores[i].data.store_id; //store id retrieved
        var add_id= CustomerDB.stores[i].data.address_id; //address if of that store retrieved
        var getAdd= CustomerDB.getAddressById(CustomerDB.addresses[i].data.address_id);
    
        console.log("Store " + st_id + ": " +name);
        console.log("Location: " + add_id + getAdd);
        console.log("\n");
    }
},
 
 };
//outputAllAddresses();
//insertData(allData);

//console.log(CustomerDB);

//outputAllCustomers();

//CustomerDB.outputCustomersByStore(297);
//outputCustomerById(59);

//CustomerDB.customers= "1";
//console.log(CustomerDB.customers);
// or 
// var CustomerDB= {customers:{}, addresses:{}, store{}};


/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 










