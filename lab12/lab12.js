/*
   Author: Teia Ziegelman
   Date: 2023
*/

$(document).ready(function() {
    function sortingHat(str) {
      var len = str.length;
      var mod = len % 4;
      if (mod == 0) {
        return "Gryffindor";
      } else if (mod == 1) {
        return "Ravenclaw";
      } else if (mod == 2) {
        return "Hufflepuff";
      } else if (mod == 3) {
        return "Slytherin";
      }
    }

    $("#submit").click(function() {
      var name = $("#input").val();
      var house = sortingHat(name);
      var newText = "<p>The Sorting Hat has sorted you into: " + house + "<p>";
      $("#output").html(newText);
    });
  });