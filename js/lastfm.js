/*
var music = null;
$.ajax({
    'async': false,
    'global': false,
    'url': "../first.json",
    'dataType': "json",
    'success': function (data) {
        music = data;
    }
});
document.getElementById('RecentList').innerHTML = "Hello"; 
var output = document.getElementById('RecentList');
output.innerHTML = music; 

fetch("../first.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    appendData(data);
  })
  .catch(function(err) {
    console.log(err);
  });
function appendData(data) {
  var output = document.getElementById("RecentList");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Artist: " + data[i].artists;
    output.appendChild(div);
  }
  
  $.getJSON("../json/first.json", function(data){
    var items =[];
    $.each(data, function(key, val){
        items.push("<li id='"+key+"'>"+val+"</li>");
    })
    $("<ul/>",{
        "class": "my-new-list",
        html:items.join("")

    }).appendTo("body");
})
}

function topTracks(data){

document = "../index.html"
  document.getElementById('TrackList').innerHTML 
  var output = document.getElementById('RecentList');

  fetch('https://littae2.github.io/json/music.json')
  .then(response => { return response.json() })
  .then(data => {
      let song = data["song"];
      // do something with the joke, like display it in a div maybe...
      output.innerHTML = song; 
  })
}


function topTracks(){

    document.getElementById('TrackList').innerHTML 
    var output = document.getElementById('TrackList');
  
    fetch('https://littae2.github.io/json/music.json')
    .then(response => { return response.json() })
    .then(data => {
      var text = "";
      let song = data["song"];
for (song in data) {
  text += data[song];
}
        // do something with the joke, like display it in a div maybe...
        output.innerHTML = song;
    })
  }  
  topTracks()
  

function allArtists() {
  document.getElementById("ArtistList").innerHTML;
  var output = document.getElementById("ArtistList");

  fetch("https://littae2.github.io/json/music.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      var text = "";

      for (artist in data["artists"]) {
        text += artist + "\n";
        
      }

      output.innerHTML = text;
    });
}
function allArtists() {
  document.getElementById("ArtistList").innerHTML;
  var output = document.getElementById("ArtistList");

  fetch("https://littae2.github.io/json/music.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      var text = "";
      var listOfArtists= new listOfArtists[string];
     


      for (artist in data["artists"]) {
        
        listOfArtists.add(artist)
        
        //artist.backgroundimg=artist["artistimg"];
      }
      for (item in listOfArtists){
       
      }

      
    });
}
*/
function allArtists() {
  document.getElementById("ArtistList").innerHTML;
  var output = document.getElementById("ArtistList");

  fetch("https://littae2.github.io/json/music.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      for (artist in data["artists"]) {
        var artimage = artist["artistimg"];
        output.innerHTML += '<img src="'  + artimage + '"/>';
        output.innerHTML+=artist
      }
    });
}

function topArtists() {
  document.getElementById("ArtistList").innerHTML;
  var output = document.getElementById("ArtistList");

  fetch("https://littae2.github.io/json/music.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      var text = "";
      var artistsOut = [];

      for (artist in data["artists"]) {
        artistsOut.add(artist);
        for (album in data[artist["album"]]) {
          for (song in data[artist[album["song"]]]) {
            artist["totalListens"] += song["timesListened"];
          }
        }
        output.innerHTML +=
          "'<div><img src='" +
          artist["artistimg"] +
          "'><h1>'" +
          artist +
          "'</h1></div'";
      }

      //artistsOut.sort(artist["totalListens"]);
      // for (artist in artistOut) {

      // }
    });
}

//topArtists();
allArtists();
allTracks();
