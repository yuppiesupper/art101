// index.js - Lab 8 JS
// Author: Teia Ziegelman
// Date: 11/4/23

// Variables
var myArray = [8, 16, 24, 21, 14, 20, 22]

// Functions
function add2(x){
    var results = (x + 2)
    return results;
}

// try out wes's code?
function firstThing(test) {
    console.log(test + "one")
}

function secondThing(test) {
    console.log(test + "two")
}

function thirdThing(test) {
    console.log(test + "three!")
}

firstThing("TEST 1: ");
secondThing("TEST 2: ");
thirdThing("TEST 3: ");

// one two three popping up after eachother?
setTimeout(function() {
    firstThing("one?");
}, 0);
setTimeout(function() {
    secondThing("two?");
}, 4000);
setTimeout(function() {
    thirdThing("three?");
}, 6000);
