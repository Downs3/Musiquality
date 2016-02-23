/**
 * Created by geoffbrown1 on 2/22/16.
 */
var app = angular.module('artistHome', []);

app.controller('ArtistHomeController', ArtistHomeController);

//ArtistHomeController.$inject = ['artistService'];

function ArtistHomeController($http, $filter, artistService) {
  var ah = this;
  ah.artist = artistService.currentArtist;
  //nc.results = '';
  //nc.found = '';
  //nc.foundCap = '';
  //nc.news = '';
  //nc.bio = '';
  //nc.track1 = '';
  //nc.track2 = '';
  //nc.track3 = '';
  //nc.track1Name = '';
  //nc.track2Name = '';
  //nc.track3Name = '';
  //nc.artistSearch = artistSearch;
  //nc.outsidePage = outsidePage;
  //nc.amazonPage = amazonPage;
  //nc.lyricsPage = lyricsPage;
  //nc.songPlay = songPlay;
  //nc.songPause = songPause;
  //audioObject = null;
  //
  //function artistSearch(artist) {
  //  nc.results = '';
  //  nc.found = '';
  //  artistService.currentArtist = artist;
  //  $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
  //    nc.results = response.data.artists.items[0].images[1].url;
  //    nc.found = response.data.artists.items[0].name;
  //    nc.foundCap = $filter('uppercase')(nc.found);
  //    $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=track').then(function (response) {
  //      nc.track1 = response.data.tracks.items[0].preview_url;
  //      nc.track2 = response.data.tracks.items[1].preview_url;
  //      nc.track3 = response.data.tracks.items[2].preview_url;
  //      nc.track1Name = response.data.tracks.items[0].name;
  //      nc.track2Name = response.data.tracks.items[1].name;
  //      nc.track3Name = response.data.tracks.items[2].name;
  //      nc.news = 'http://www.billboard.com/search/site/' + artist + '?f[0]=ss_bb_type%3Aarticle';
  //      nc.bio = 'https://en.wikipedia.org/wiki/' + artist;
  //    });
  //  });
  //}
  //
  //function lyricsPage(track) {
  //  window.open('http://search.azlyrics.com/search.php?q=' + track + '+' + nc.artist, '_blank', 'location=yes');
  //}
  //
  //function amazonPage(track) {
  //  window.open('http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Ddigital-music&field-keywords='+ nc.artist + '+' + track, '_blank', 'location=yes');
  //}
  //
  //function outsidePage(url) {
  //  window.open(url, '_blank', 'location=yes');
  //}
  //
  //function songPlay(song){
  //  audioObject = new Audio(song);
  //  audioObject.play();
  //}
  //
  //function songPause(){
  //  audioObject.pause();
  //}
}
