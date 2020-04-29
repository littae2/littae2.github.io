/*

$(document).ready(function() {
  $(".albumTrack").click(_ => {
    console.log("I've been clicked!");
  })
  })
*/

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
      let fullList = [];

      for (let i = 0; i < artists.length; i++) {
        let artistsData = data[artists[i]];
        let artist = artists[i];

        let artistdata = data[artist];
        let albumdata = artistdata["album"];
        let albums = Object.keys(albumdata);

        for (let j = 0; j < albums.length; j++) {
          let album = albums[j];
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
          "<div class = 'heart'></div>" +
          artist +
          " - " +
          songName +
          " (" +
          album +
          ") Listened: " +
          listens +
          "</div></div>";
      }

      let heartElements = document.getElementsByClassName("heart");
      for (let j = 0; j < heartElements.length; j++) {
        heartElements[j].innerHTML =
          "<i class='far fa-heart' id='heart" + j + "'></i>";
      }
      let heart = document.getElementsByClassName("heart");
      for (let i = 0; i < heart.length; i++) {
        heart[i].addEventListener("click", function () {
          if (
            (heartElements[i].innerHTML =
              "<i class='far fa-heart' id='heart" + i + "'></i>")
          )
            heartElements[i].innerHTML =
              "<i class='fas fa-heart' id='heart" + i + "'></i>";
        });
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
      let fullList = [];

      for (let i = 0; i < artists.length; i++) {
        let artist = artists[i];

        let artistdata = data[artist];
        let albumdata = artistdata["album"];
        let albums = Object.keys(albumdata);

        for (let j = 0; j < albums.length; j++) {
          let album = albums[j];
          let albumName = data[artist].album;
          let songsObject = albumName[album].song;
          let songs = Object.keys(songsObject);

          for (let s = 0; s < songs.length; s++) {
            let songName = songs[s];
            let songObject = songsObject[songName];
            let albumImage = albumName[album].image;
            let lastListen = songObject.lastListened;

            let lastTime = new Date(lastListen);
            let dateDiff = returnTimeDiff(lastTime);

            let listened = songObject.timesListened;
            fullList.push({
              artist,
              album,
              songName,
              listened,
              albumImage,
              lastTime,
              dateDiff,
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
        let lastTime = top20[i].dateDiff;

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

function returnTimeDiff(dateTimeIn) {
  let previous = new Date(dateTimeIn);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  let current = new Date(dateTime);

  let timeDiff = current.getTime() - previous.getTime();
  let dateDiff = timeDiff / (1000 * 3600 * 24);
  let dateRslt = dateDiff.toFixed();
  if (dateRslt <= 0 || dateRslt == "NaN") {
    return "today";
  }
  if (dateRslt == 1) {
    return "yesterday";
  }
  if (dateRslt >= 365) {
    return "over a year ago";
  } else {
    return dateRslt + " days ago";
  }
}
//recentTracks();
//topArtists();
topTracks();
