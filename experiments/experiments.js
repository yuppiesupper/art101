/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 13 2023
*/

// loads the map and centers on SC
var mymap = L.map('mapid').setView([36.9741, -122.0308], 13);
// var mymap = L.map('mapid').setView([34.0522, -118.2437], 13);
// loads the map tiles
// z - zoom level, x - x cord, y - y cord
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(mymap);

// adding a marker to the map 
var LAmarker = L.marker([34.0522, -118.2437]).addTo(mymap);
LAmarker.area = "Los Angeles";
var Paris = L.marker([48.8566, 2.3522]).addTo(mymap);
Paris.area = "Paris";
var Barcelona = L.marker([41.3874, 2.1686]).addTo(mymap);
Barcelona.area = "Barcelona";
var Amsterdam = L.marker([52.3676, 4.9041]).addTo(mymap);
Amsterdam.area = "Amsterdam";
var Berlin = L.marker([52.5200, 13.4050]).addTo(mymap);
Berlin.area = "Berlin";
var Chicago = L.marker([41.8781, -87.6298]).addTo(mymap);
Chicago.area = "Chicago";
var Istanbul = L.marker([41.0082, 28.9784]).addTo(mymap);
Istanbul.area = "Istanbul";
var Toronto = L.marker([43.6532, -79.3832]).addTo(mymap);
Toronto.area = "Toronto";
var SaoPaulo = L.marker([-23.5505, -46.6333]).addTo(mymap);
SaoPaulo.area = "Sao Paulo";
var Sydney = L.marker([-33.8688, 151.2093]).addTo(mymap);
Sydney.area = "Sydney";
var Santiago = L.marker([-33.4489, -70.673676]).addTo(mymap);
Santiago.area = "Santiago";
var NYC = L.marker([40.7128, -74.0060]).addTo(mymap);
NYC.area = "New York City";
var MexicoCity = L.marker([19.4326, -99.1332]).addTo(mymap);
MexicoCity.area = "Mexico City";
var Madrid = L.marker([40.4168, -3.7038]).addTo(mymap);
Madrid.area = "Madrid";
var London = L.marker([51.5074, -0.1278]).addTo(mymap);
London.area = "London";
var Jakarta = L.marker([-6.1751, 106.8650]).addTo(mymap);
Jakarta.area = "Jakarta";

// spotify player
// using spotify's web api to play music
var deviceId;
var isPlaying = false;
const token = 'BQCaP4qZugjaUrLX_j4UAmLm6dRBrlqNF-ueKFoFLy0LeedAqxWDAKD5T2gAYwya3KrgyDIznaGTBIvb5nN9XGVHwMIZIriI9_DUBRgA-0dTBaLjS8BLyR3vIbzMJjColiFA6JV4TEAyK03BSwsI2flSUihnZLjkKD5gIlFVRYUzjdtPzsd04e7RFezSQO0g44ab';

// spotify's given code to play music
window.onSpotifyWebPlaybackSDKReady = () => {
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });

player.connect();

player.addListener('ready', ({device_id}) => {
  deviceId = device_id;
});

player.addListener('player_state_changed', state => {
  isPlaying = !state.paused;
});
};

// play/pause button
window.playTrack = function() {
  fetch(`https://api.spotify.com/v1/me/player/${isPlaying ? 'pause' : 'play'}?device_id=${deviceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
}

// embedding the track onto the popup
// ADDING SPOTIFY TO CITY
LAmarker.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${LAmarker.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `);

LAmarker.on('click', function(){
  LAmarker.openPopup();
});

Amsterdam.on('click', function(){
  Amsterdam.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/0NxfpRR1pmtGC9J61iHIIc?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Paris.on('click', function(){
  Paris.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/1eldTykrnkEBLX41bk5eMw?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Barcelona.on('click', function(){
  Barcelona.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2HafqoJbgXdtjwCOvNEF14?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});Berlin.on('click', function(){
  Berlin.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/0bYg9bo50gSsH3LtXe2SQn?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Chicago.on('click', function(){
  Chicago.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2EjXfH91m7f8HiJN1yQg97?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Istanbul.on('click', function(){
  Istanbul.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/3auN910HHNYykQo8i9q5J1?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Toronto.on('click', function(){
  Toronto.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
SaoPaulo.on('click', function(){
  SaoPaulo.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2InS5VWKJQbsFBKOsf1cJB?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Sydney.on('click', function(){
  Sydney.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Santiago.on('click', function(){
  Santiago.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/6hwGwCfCwHoSJQw7AYPEQu?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
NYC.on('click', function(){
  NYC.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
MexicoCity.on('click', function(){
  MexicoCity.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/6CvTEtGagmzQvkUzzyKR9k?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Madrid.on('click', function(){
  Madrid.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2HafqoJbgXdtjwCOvNEF14?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
London.on('click', function(){
  London.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});
Jakarta.on('click', function(){
  Jakarta.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/7F4tV8SiUy6itZTdAzdafO?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});






window.onload = function() {
  alert("Welcome to Our Music Map!\n\nThis is our welcome message.");
}

window.onload = function() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}