
$(function(){
    
    getJSON()
    // localstorage()
 })
 function getJSON(){
    $.getJSON('ques-db.json',function(json){
        if (typeof (Storage) !== "undefined") {
            var person = ['Shravan Kumar 01','Shravan Kumar 02','Shravan Kumar 03'];
            localStorage.setItem('person', person);
            let output = localStorage.getItem('person', person).split(",")
            console.log(output[0]);
    
            
        }
        else {
            alert("Sorry, your browser does not support web storage...");
        }
        console.log("json");
    })
    
 }

//  function localstorage(){
    // if (typeof (Storage) !== "undefined") {
    //     var person = ['Shravan Kumar 01','Shravan Kumar 02','Shravan Kumar 03'];
    //     localStorage.setItem('person', person);
    //     let output = localStorage.getItem('person', person).split(",")
    //     console.log(output[0]);

        
    // }
    // else {
    //     alert("Sorry, your browser does not support web storage...");
    // }
//  }