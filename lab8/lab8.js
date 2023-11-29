// index.js - Lab 8 JS
// Author: Teia Ziegelman
// Date: 11/4/23

function printAfterDelay(message, delay, callback) {
    setTimeout(function () {
      console.log(message);
      if (callback) {
        callback();
      }
    }, delay);
  }
  
  function seriesOfStrings() {
    printAfterDelay("I am first", 0, function () {
      printAfterDelay("I am second", 2000, function () {
        printAfterDelay("I am third", 2000);
      });
    });
  }
  
  // Start the sequence
  seriesOfStrings();
  
  