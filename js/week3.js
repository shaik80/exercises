$(function(){
    getJSON()
    // localstorage()
 })
 function getJSON(){
    $.getJSON('js/ques-db.json',function(json){
        // questions = json;
        // console.log(Object)
        // const keys = Object.keys(questions)
        // console.log(keys.length);
        // [0 -> 1] * 1
        // let randIndex = Math.round(Math.random()*(keys.length-1))
        console.log("json");
    })
 }

//  function localstorage(){
//     if (typeof (Storage) !== "undefined") {
//         var person = ['Shravan Kumar 01','Shravan Kumar 02','Shravan Kumar 03'];
//         localStorage.setItem('person', person);
//         let output = localStorage.getItem('person', person).split(",")
//         console.log(output[0]);

        
//     }
//     else {
//         alert("Sorry, your browser does not support web storage...");
//     }
//  }