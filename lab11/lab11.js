/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Teia Ziegelman
   Date: 2023
*/


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  } 

// click listener for button
$("#submit").click(function(){ 
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName); 
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>'); 
});