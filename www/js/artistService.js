/**
 * Created by geoffbrown1 on 2/22/16.
 */
var app = angular.module('artistService', []);

app.service('artistService', artistService);

  artistService.$inject = [];

  function artistService()
  {
    var as = this;
    as.id = '';
    as.id2 = '';
    as.currentArtist = '';
    as.bandPic = '';
    as.login = '';
    as.addLikes = addLikes;

    function addLikes(){

      console.log(as.login);

      var ref = new Firebase("https://musiquality.firebaseio.com/users/" + as.login);
      ref.push({Artist_Name: as.currentArtist, Artist_ID: as.id});

    }
  }



