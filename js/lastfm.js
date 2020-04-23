
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
  fetch('json/musicv3.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    
      let artists=Object.keys(data);
      
      for(let i =0; i< artists.length; i++){
        let artistData = data[artists[i]]
        let artist =artists[i];
        console.log(artist+" Total Listens: "+artistData["totalListens"]);
        let albumArray = artistData["album"]
       // console.log(albumArray.length)

        for(let i = 0; i<albumArray.length; i ++){
          let album =albumArray[i];
          console.log(albumArray[album[i]]);
          
          
        }
      }
 /// let artistData =data[artist[0]];
     // console.log(artistData["totalListens"])


      //console.log(data[3])
      //console.log(data[3]["Little Mix"]["album"][0])
    // console.log(data[3]["Little Mix"]["album"][1]);
      /*
      
      let output = document.getElementById("TrackList");

      let artistData = data["artists"];
     
      let keys = Object.keys(artistData);
     // console.log (artistData);
      keys.forEach((k)=>{
      let artists= artistData[k]
      // / console.log (artists)
        console.log(artists["album"])
      })
        //console.log (artistArr)
        */
      });
    
    }
         
//allArtists();
topTracks();

/*
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
  

    
  
}
function topTracks() {}

topArtists();
*/
