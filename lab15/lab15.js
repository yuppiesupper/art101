/*
   Author: Teia Ziegelman
   Date: 2023
*/


  // Wrap your AJAX code in a function
  function fetchData() {
    $.ajax({
      url: "https://yesno.wtf/api",
      method: "GET",
      dataType: "json",
    })
    .done(function (response) {
      console.log("done");
      console.log(response);

      // Clear existing content before appending new response
      $("#output").empty();

      // Append the answer
      $("#output").append(response.answer);

      // If the API provides an image, append it as well
      if (response.image) {
        var imageElement = $("<img>").attr("src", response.image);
        $("#output").append(imageElement);
      }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    });
  }

  // Attach the function to the button click event
  $("#clickme").click(function () {
    console.log("Button clicked");
    fetchData();
  });