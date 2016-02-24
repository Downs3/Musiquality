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
    tc.audioObject = null;
    tc.playTrack = playTrack;
    tc.pauseTrack = pauseTrack;

    function songTitleSearch(song) {
        $http.get('https://api.spotify.com/v1/search?q=' + song + '&type=track').then(function (response) {
            tc.results = response.data.tracks.items;
            console.log(response.data.tracks.items[0].id);

        });
        console.log(song);
        tc.found = '';
    }
    function playTrack(track) {
        if(tc.audioObject !== null) {
            tc.audioObject.pause();
            tc.audioObject = new Audio(track);
            tc.audioObject.play();
        }
        else {
            tc.audioObject = new Audio(track);
            tc.audioObject.play();
        }
    }
    function pauseTrack() {
        tc.audioObject.pause();
    }
}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
