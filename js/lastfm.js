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
function allTracks() {
  fetch("json/musicv3.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = document.getElementById("TrackList");
      let artists = Object.keys(data);

      for (let i = 0; i < artists.length; i++) {
        let artistsData = data[artists[i]];
        var artist = artists[i];

        let artistdata = data[artist];
        var albumdata = artistdata["album"];
        var albums = Object.keys(albumdata);

        for (let j = 0; j < albums.length; j++) {
          var album = albums[j];
          let albumName = data[artist].album;
          let songs = Object.keys(albumName[album].song);
          
         // console.log(albumName[album].image)
          
          for (let s = 0; s < songs.length; s++) {
            let songName = songs[s];
            let albumImage = albumName[album].image
          // var img = document.createElement("img")
//img.src =albumImage+".jpg"
//output.appendChild(img);
            output.innerHTML +=
          "<img  src='" +
          albumImage +
          ".jpg' width=50px height=50px class ='albumTrack'>";

          output.innerHTML+="<div class ='trackInfo'>"+artist+ " - " +songName +" ("+album+")"+"</div"
            
          }
         
         
        }
        
      }
      
    });
    
}

allTracks();
topArtists();
