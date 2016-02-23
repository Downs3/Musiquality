/**
 * Created by bobnweave on 2/19/16.
 */
var app = angular.module('relatedArtist', []);

app.controller('RelatedArtistController', RelatedArtistController);

function RelatedArtistController($http) {
    // controller data and functions
    var rc = this;
    rc.artist = '';
    rc.artistKey = '';
    rc.artistSearch = artistSearch;

    function artistSearch(artist) {

        //first get request grabs the artist key
        $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
            rc.artistKey = response.data.artists.items[0].id;
            //second get request injects the artist key and returns the related artists information
            $http.get('https://api.spotify.com/v1/artists/' + rc.artistKey + '/related-artists').then(function (secondResponse) {
                rc.artistArray = secondResponse.data.artists;
                //sorts the array of artists in descending order based on artist popularity rating
                 rc.artistArray.sort(function(a, b) {
                     return parseFloat(b.popularity) - parseFloat(a.popularity);
                 });
                artistService.currentArtist = artist;
            });
        });

        console.log(artist);

    }

}




