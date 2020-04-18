/*
function allArtists() {
  fetch("json/music.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("ArtistList").innerHTML;
      let output = document.getElementById("ArtistList");

      let artists = data["artists"];

      let keys = Object.keys(artists);
      keys.forEach((k) => {
        output.innerHTML +=
          "<img  src='" +
          artists[k].artistimg +
          "' width: 200px height: 200px >";
      });
    });
}

function topTracks() {
  fetch("json/music.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("TrackList").innerHTML;
      let output = document.getElementById("TrackList");

      let artists = data["artists"];
      let topSongs = [];
      let keys = Object.keys(artists);
      keys.forEach((k) => {
       console.log(artists[k])
          
        });
      });
    }
         
allArtists();
topTracks();
*/

function allArtists() {
  fetch("json/musicv2.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("ArtistList").innerHTML;
      let output = document.getElementById("ArtistList");
      let artists = data["artists"];
      let keys = Object.keys(artists);
      keys.forEach((k) => {
        output.innerHTML +=
          "<img  src='" +
          artists[k].artistimg +
          "' width: 200px height: 200px >";
      });
    });
}

function topArtists() {
  fetch("json/musicv2.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let artistarray = [];
      document.getElementById("ArtistList").innerHTML;
      let output = document.getElementById("ArtistList");
      let artists = data["artists"];
      let keys = Object.keys(artists);
      console.log(keys);
      keys.forEach((k) => {
        artistarray.push(artists[k]);

        
      });
      artistarray.sort[artists.totalListens]
      console.log(artistarray);
    });
    
}
function topTracks() {}

topArtists();
