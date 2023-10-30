// index.js - objects lab
// Author: Teia
// Date: 10/27/23

// Define Variables
var myTransport = ["Mustang", "bike", "bus"];

// Object for my main ride
myMainRide = {
  make: "Ford",
  model: "Mustang",
  color: "red",
  year: 2006,
  age: function() {
    return 2023 - this.year;
  }
}
// output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
