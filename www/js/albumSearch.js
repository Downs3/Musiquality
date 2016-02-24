var app = angular.module('albumSearch', []);

app.controller('AlbumController', AlbumController);

function AlbumController($http) {
    // controller data and functions
    var ac = this;
    ac.artist = '';
    ac.found = '';
    ac.albumSearch = albumSearch;
    ac.audioObject = null;
    ac.playTrack = playTrack;
    ac.pauseTrack = pauseTrack;

    function albumSearch(album) {
        $http.get('https://api.spotify.com/v1/search?q=' + album + '&type=album').then(function (response) {
            ac.results = response.data.albums.items;
        });
        console.log(album);
        ac.found = '';
    }
    function playTrack(track) {
        if(ac.audioObject !== null) {
            ac.audioObject.pause();
            ac.audioObject = new Audio(track);
            ac.audioObject.play();
        }
        else {
            ac.audioObject = new Audio(track);
            ac.audioObject.play();
        }
    }
    function pauseTrack() {
        ac.audioObject.pause();
    }
}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
