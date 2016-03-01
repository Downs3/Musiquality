/**
 * Created by DanTutt on 2/29/16.
 */
var app = angular.module('myLikes', []);

app.controller('myLikesController', myLikesController);

function myLikesController($http, artistService) {
// controller data and functions
    var ml = this;
    ml.currentLikes = '';
    ml.getLikes = getLikes;

    function getLikes() {

        //var ref = new Firebase("https://musiquality.firebaseio.com/users/" + artistService.login);
        $http.get("https://musiquality.firebaseio.com/users/" + artistService.login + '.json').then(function(response){
            ml.currentLikes = response.data;
        });
        console.log(artistService.login);
        console.log(ml.currentLikes);


    }
}
