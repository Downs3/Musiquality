/**
 * Created by geoffbrown1 on 2/18/16.
 */
var app = angular.module('artistName', []);

app.controller('NameController', NameController);

function NameController($http, $filter) {
  // controller data and functions
  var nc = this;
  nc.artist = '';
  nc.results = '';
  nc.found = '';
  nc.news = '';
  nc.purchase1 = '';
  nc.purchase2 = '';
  nc.purchase3 = '';
  nc.track1 = '';
  nc.track2 = '';
  nc.track3 = '';
  nc.track1Name = '';
  nc.track2Name = '';
  nc.track3Name = '';
  nc.artistSearch = artistSearch;
  //nc.songPlay = songPlay;

  function artistSearch(artist) {
    nc.results = '';
    nc.found = '';
    $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
      nc.results = response.data.artists.items[0].images[1].url;
      nc.found = response.data.artists.items[0].name;
      $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=track').then(function (response) {
        nc.track1 = response.data.tracks.items[0].preview_url;
        nc.track2 = response.data.tracks.items[1].preview_url;
        nc.track3 = response.data.tracks.items[2].preview_url;
        nc.track1Name = response.data.tracks.items[0].name;
        nc.track2Name = response.data.tracks.items[1].name;
        nc.track3Name = response.data.tracks.items[2].name;
        nc.purchase1 = 'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-music&field-keywords='+ artist + '+' + nc.track1Name;
        nc.purchase2 = 'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-music&field-keywords='+ artist + '+' + nc.track2Name;
        nc.purchase3 = 'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-music&field-keywords='+ artist + '+' + nc.track3Name;
        nc.news = 'http://www.billboard.com/search/site/' + artist + '?f[0]=ss_bb_type%3Aarticle';
        nc.bio = 'https://en.wikipedia.org/wiki/' + artist;
      });
    });
    console.log(artist);
    console.log(nc.news);
    nc.artist = '';
  }



  //function songPlay(artist){
  //$http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=track').then(function (response) {
  //  audioObject = new Audio(response.data.tracks.items[0].preview_url);
  //  audioObject.play();
  //});
  //}
}

//audioObject = new Audio(data.tracks.items[0].preview_url);
//audioObject.play();

//$filter('filter')(array, expression)

//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');

//https://en.wikipedia.org/wiki/nirvana(band)
