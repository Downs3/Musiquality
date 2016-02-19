/**
 * Created by geoffbrown1 on 2/18/16.
 */
var app = angular.module('artistName', []);

app.controller('NameController', NameController);

function NameController($http) {
  // controller data and functions
  var nc = this;
  nc.artist = '';
  nc.found = '';
  nc.artistSearch = artistSearch;

  function artistSearch(artist) {
    $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
      nc.results = response.data.artists.items[0].images[1].url;
    });
    console.log(artist);
    nc.found = '';
  }

}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
