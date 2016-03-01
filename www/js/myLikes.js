/**
 * Created by DanTutt on 2/29/16.
 */
var app = angular.module('myLikes', []);

app.controller('myLikesController', myLikesController);

myLikesController.$inject = ['$http', 'userService','$scope', '$state'];

function myLikesController($http, userService, $scope, $state) {
// controller data and functions
    var ml = this;
    ml.currentLikes = '';
    ml.getLikes = getLikes;
    ml.artistStuff = artistStuff;

  getLikes();
  $scope.$on('$ionicView.beforeEnter', function() {
    getLikes();
  });

    function getLikes() {

        $http.get("https://musiquality.firebaseio.com/users/" + userService.user.uid + '.json').then(function(response){
            ml.currentLikes = response.data;
        });
        console.log('getlikes');
        console.log(userService.user.uid);
        console.log(ml.currentLikes);


    }
    function artistStuff(name, pic){
        artistService.currentArtist = name;
        artistService.bandPic = pic;
        $state.go('tabsController.artistHome');
    }
}
