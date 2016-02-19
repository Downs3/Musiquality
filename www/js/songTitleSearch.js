/**
 * Created by DanTutt on 2/19/16.
 */
var app = angular.module('songTitle', []);

app.controller('TitleController', TitleController);

function TitleController($http) {
    // controller data and functions
    var tc = this;
    tc.song = '';
    tc.found = '';
    tc.songTitleSearch = songTitleSearch;

    function songTitleSearch(song) {
        $http.get('https://api.spotify.com/v1/search?q=' + song + '&type=track').then(function (response) {
            tc.results = response.data.tracks.items[0].album.images[1].url;
        });
        console.log(song);
        tc.found = '';
    }

}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
