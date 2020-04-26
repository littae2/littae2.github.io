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

function topTracks() {}

//allArtists();
topTracks();

function topArtists() {
  fetch("json/musicv3.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let artists = Object.keys(data);
      let artistListens = [];
      let listens = [];
      for (let i = 0; i < artists.length; i++) {
        let artistData = data[artists[i]];
        let artist = artists[i];

        artistListens.push(artist, artistData["totalListens"]);
        listens.push(artistData["totalListens"]);
      }
      listens.sort(function (a, b) {
        return b - a;
      }); //decending

      let artistOrder = [];

      for (let j = 0; j < listens.length; j++) {
        for (let i = 0; i < artistListens.length; i++) {
          if (artistListens[i] == listens[j]) {
            artistOrder.push(artistListens[i - 1]);
          }
        }
      }
      document.getElementById("ArtistList").innerHTML;
      let output = document.getElementById("ArtistList");

      for (let i = 0; i < artistOrder.length; i++) {
        let artist = artistOrder[i];
        output.innerHTML +=
          "<img  src='" +
          data[artist].artistimg +
          "' width: 200px height: 200px class='image'>";
      }
    });
}
function topTracks() {}

topArtists();
