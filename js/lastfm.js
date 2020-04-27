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
function topTracks() {
  fetch("json/musicv3.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = document.getElementById("TrackList");
      let artists = Object.keys(data);
      var fullList = [];

      for (let i = 0; i < artists.length; i++) {
        let artistsData = data[artists[i]];
        var artist = artists[i];

        let artistdata = data[artist];
        var albumdata = artistdata["album"];
        var albums = Object.keys(albumdata);

        for (let j = 0; j < albums.length; j++) {
          var album = albums[j];
          let albumName = data[artist].album;
          let songsObject = albumName[album].song;
          let songs = Object.keys(songsObject);

          for (let s = 0; s < songs.length; s++) {
            let songName = songs[s];
            let songObject = songsObject[songName];
            let albumImage = albumName[album].image;
            let listened = songObject.timesListened;
            fullList.push({ artist, album, songName, listened, albumImage });
          }
        }
      }
      let top20 = [];
      fullList.sort((a, b) => (a.listened < b.listened ? 1 : -1)); //decending`
      for (let i = 0; i < 20; i++) {
        top20.push(fullList[i]);
      }

      console.log(top20);
      for (let i = 0; i < top20.length; i++) {
        let albumImage = top20[i].albumImage;
        let artist = top20[i].artist;
        let songName = top20[i].songName;
        let album = top20[i].album;
        let listens = top20[i].listened;

        output.innerHTML +=
          "<div class = 'track'>" +
          "<img  src='" +
          albumImage +
          ".jpg' width=50px height=50px class ='albumTrack'>" +
          "<div class ='trackInfo'>" +
          artist +
          " - " +
          songName +
          " (" +
          album +
          ") Listened: " +
          listens +
          "</div></div>";
      }
    });
}

function recentTracks() {
  fetch("json/musicv3.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = document.getElementById("RecentList");
      let artists = Object.keys(data);
      var fullList = [];

      for (let i = 0; i < artists.length; i++) {
        var artist = artists[i];

        let artistdata = data[artist];
        var albumdata = artistdata["album"];
        var albums = Object.keys(albumdata);

        for (let j = 0; j < albums.length; j++) {
          var album = albums[j];
          let albumName = data[artist].album;
          let songsObject = albumName[album].song;
          let songs = Object.keys(songsObject);

          for (let s = 0; s < songs.length; s++) {
            let songName = songs[s];
            let songObject = songsObject[songName];
            let albumImage = albumName[album].image;
            let lastListen = songObject.lastListened;

            var lastTime = new Date(lastListen);

            let listened = songObject.timesListened;
            fullList.push({
              artist,
              album,
              songName,
              listened,
              albumImage,
              lastTime,
            });
          }
        }
      }
      let top20 = [];
      fullList.sort((a, b) => (a.lastTime < b.lastTime ? 1 : -1)); //decending`
      for (let i = 0; i < 20; i++) {
        top20.push(fullList[i]);
      }

      for (let i = 0; i < top20.length; i++) {
        let albumImage = top20[i].albumImage;
        let artist = top20[i].artist;
        let songName = top20[i].songName;
        let album = top20[i].album;
        let listens = top20[i].listened;
        let lastTime = top20[i].lastTime;

        output.innerHTML +=
          "<div class = 'track'>" +
          "<img  src='" +
          albumImage +
          ".jpg' width=50px height=50px class ='albumTrack'>" +
          "<div class ='trackInfo'>" +
          artist +
          " - " +
          songName +
          " (" +
          album +
          ") Last Listened: " +
          lastTime +
          "</div></div>";
      }
    });
}
recentTracks();
topArtists();
topTracks();
