/*
   Author: Teia Ziegelman
   Date: 2023
*/
function runFizzBuzz() {
  for (var index = 1; index <= 200; index++) {
      var str = "";
      if (index % 3 === 0) {
          str += "Fizz";
      }
      if (index % 5 === 0) {
          str += "Buzz";
      }
      if (index % 7 === 0) {
          str += "Boom";
      }
      // If the string is still empty, use the number itself
      if (str === "") {
          str = index.toString();
      }

      // Append the result to the output div
      document.getElementById("output").innerHTML += str + "<br>";
  }
}