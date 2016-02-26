var app = angular.module('albumSearch', []);

app.controller('AlbumController', AlbumController);

function AlbumController($http,  artistService, $state)  {
    // controller data and functions
    var ac = this;
    ac.album = '';
    ac.bandPic = '';
    ac.results = '';
    ac.results2 = '';
    ac.results3 = '';
    ac.albumSearch = albumSearch;
    ac.currentArtist = currentArtist;

    function albumSearch(album) {
        $http.get('https://api.spotify.com/v1/search?q=' + album + '&type=album').then(function (response) {
            ac.results = response.data.albums.items;
        });
    }
    function currentArtist(id) {
        artistService.id = id;
        $state.go('tabsController.artistHome');
        console.log(id);
    }
}




