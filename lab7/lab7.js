// index.js - Lab 7 JS
// Author: Teia Ziegelman
// Date: 11/2/23

// Constants

// Functions

// sortName = takes user input and sorts letters
function sortUserName() {
  var userName = window.prompt("What's your name?");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var sortNameArray = nameArray.sort();
  console.log("sortNameArray =", sortNameArray);
  //join array back to a string
  var nameSorted = sortNameArray.join('');
  console.log("nameSorted= ", nameSorted);
  return nameSorted;
}
//output
document.writeln("Here's your new and improved name!: ",
    sortUserName(), "</br>");