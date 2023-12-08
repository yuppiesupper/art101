/*
   Author: Teia Ziegelman
   Date: 2023
*/

// Constants for XKCD API URLs 
const BASE_URL = "https://xkcd.com/";
const INFO_URL = "info.0.json";

// Function to replace single and double quotes with HTML symbols
function makeSafe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}
// Function to get and display XKCD comic based on the comic number
function getComic(num) {
    // Create the comic number part of the URL
  const numStr = num ? `${num}/` : "";
  // Construct the complete URL for the XKCD API
  const ourURL = `${BASE_URL}${numStr}${INFO_URL}`;
  console.log("Our new URL:", ourURL);

  // Make an AJAX request to the XKCD API
  $.ajax({
    url: ourURL,
    type: "GET",
  })
  .done(function(data) {
    // Process the JSON data returned by the server
    const imageUrl = data.img;
    const title = makeSafe(data.title);
    const alt = makeSafe(data.alt);
    const comicNum = data.num;

    // Build the HTML content for the comic and display it
    const html = `<div id="imageblock">
      <h2>${title}</h2>
      <img src="${imageUrl}" title="${alt}"><br>
      <button id="prev">Previous</button><button id="next">Next</button>
    </div>`;
    $("#output").html(html);

    // Event listener for buttons
    $("#prev").click(() => getComic(comicNum - 1));
    $("#next").click(() => getComic(comicNum + 1));
  })
  .fail(() => console.log("don't worry about that ^"));
}

// Start by getting and displaying the latest XKCD comic
getComic();
