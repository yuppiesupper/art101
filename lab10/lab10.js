/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Teia Ziegelman
   Date: 2023
*/
function generateRandomText() {
    const text = "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });