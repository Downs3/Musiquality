/**
 * Created by geoffbrown1 on 2/18/16.
 */
var app = angular.module('artistName', []);

app.controller('NameController', NameController);

NameController.$inject = ['$http', 'artistService'];

function NameController($http, artistService) {
  var nc = this;
  nc.artist = '';
  nc.bandPic = '';
  nc.results = '';
  nc.artistSearch = artistSearch;
  nc.currentArtist = currentArtist;

  function artistSearch(artist) {
    $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
      nc.results = response.data.artists.items;
    });
  }

  function currentArtist(name, pic) {
    artistService.currentArtist = name;
    artistService.bandPic = pic;
  }
}

