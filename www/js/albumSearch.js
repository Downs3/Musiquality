var app = angular.module('albumSearch', []);

app.controller('AlbumController', AlbumController);

function AlbumController($http) {
    // controller data and functions
    var ac = this;
    ac.artist = '';
    ac.found = '';
    ac.albumSearch = albumSearch;
    ac.audioObject = null;

    function albumSearch(album) {
        $http.get('https://api.spotify.com/v1/search?q=' + album + '&type=album').then(function (response) {
            ac.results = response.data.albums.items;
        });
        console.log(album);
        ac.found = '';
    }

}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
