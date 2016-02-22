/**
 * Created by bobnweave on 2/19/16.
 */
var app = angular.module('relatedArtist', []);

app.controller('RelatedArtistController', RelatedArtistController);

function RelatedArtistController($http) {
    // controller data and functions
    var rc = this;
    rc.artist = '';
    rc.found = '';
    rc.artistKey = '';
    rc.artistSearch = artistSearch;

    function artistSearch(artist) {
        $http.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist').then(function (response) {
            //rc.results = response.data.artists.items[0].images[1].url;
            rc.artistKey = response.data.artists.items[0].id;
            $http.get('https://api.spotify.com/v1/artists/' + rc.artistKey + '/related-artists').then(function (secondResponse) {
                // $http.get('https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/related-artists').then(function (secondResponse) {
                //rc.secondResults = secondResponse.data;
                rc.artistArray = secondResponse.data.artists;
                rc.artistArray.sort(function(a, b) {
                    return parseFloat(b.popularity) - parseFloat(a.popularity);
                });
               // rc.artistName = secondResponse.data.artists[0].name;
               // rc.artistPopularity = secondResponse.data.artists[0].popularity;
              //  rc.artistImage = secondResponse.data.artists[0].images[1].url;
            });
        });

        console.log(artist);
        rc.found = '';
    }

}



//return $http.get('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist');
