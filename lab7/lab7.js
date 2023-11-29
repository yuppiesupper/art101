// index.js - Lab 7 JS
// Author: Teia Ziegelman
// Date: 11/2/23

function shuffleArray(array) {
  // Split the array into uppercase and lowercase letters
  var uppercaseLetters = array.filter(char => char === char.toUpperCase());
  var lowercaseLetters = array.filter(char => char === char.toLowerCase());

  // Shuffle each group of letters
  uppercaseLetters = shuffleSubArray(uppercaseLetters);
  lowercaseLetters = shuffleSubArray(lowercaseLetters);

  // Create a new array where each word starts with a capital letter
  var resultArray = [];
  var capitalIndex = 0;
  for (var i = 0; i < lowercaseLetters.length; i++) {
    if (lowercaseLetters[i] === ' ') {
      resultArray.push(' '); // Preserve spaces
    } else {
      // If it's the first letter of a word, add a capital letter
      if (capitalIndex < uppercaseLetters.length) {
        resultArray.push(uppercaseLetters[capitalIndex++]);
      }
      resultArray.push(lowercaseLetters[i]);
    }
  }

  return resultArray;
}

function shuffleSubArray(subArray) {
  for (var i = subArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = subArray[i];
    subArray[i] = subArray[j];
    subArray[j] = temp;
  }
  return subArray;
}

function generateAnagram() {
  var userNameInput = document.getElementById("userName").value;
  var nameArray = userNameInput.split('');
  var shuffledNameArray = shuffleArray(nameArray);
  var nameShuffled = shuffledNameArray.join('');
  document.getElementById("output-container").innerHTML = "Here's your new and improved name!: " + nameShuffled;
}