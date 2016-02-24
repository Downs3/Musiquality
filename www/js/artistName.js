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
  nc.bandName = '';
  nc.results = '';
  nc.results2 = '';
  nc.artistSearch = artistSearch;
  nc.songPlay = songPlay;
  nc.songPause = songPause;
  nc.audioObject = null;

  function artistSearch(artist) {
    $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
      nc.results = response.data.artists.items;
      nc.bandPic = response.data.artists.items[0].images[1].url;
      nc.bandName = response.data.artists.items[0].name;
      artistService.currentArtist = artist;
      artistService.bandPic = nc.bandPic;
      artistService.bandName = nc.bandName;
      $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=track').then(function (response) {
        nc.results2 = response.data.tracks.items;
      });
    });
  }

  function songPlay(song) {
    if (nc.audioObject !== null) {
      nc.audioObject.pause();
      nc.audioObject = new Audio(song);
      nc.audioObject.play();
    }
    else {
      nc.audioObject = new Audio(song);
      nc.audioObject.play();
    }
  }

  function songPause() {
    nc.audioObject.pause();
  }
}

