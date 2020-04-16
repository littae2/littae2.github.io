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
}*/


