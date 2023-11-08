// index.js - Lab 9 JS
// Author: Teia Ziegelman
// Date: 11/7/23

//add button to output
$("#output").append("<br><button id='dosmth'>click me!</button>");
$("#output").append("<br><button id='dosmthelse'>click me!</button>");

// add word after H3
$("h3").append(" FUN!!");

//BUTTON FUNCTIONS
//button 1
function myButton() {
    $("#output").html("boo!")
};


$("#dosmth").click(myButton);

$("#dosmth").click(function(){
    $("#output").toggleClass("special");
    $("#output").html("boo!")
})
                      
//button 2
function myButton2() {
    $("#output").html("you're safe.... for now >;)")
};

$("#dosmthelse").click(myButton2)

