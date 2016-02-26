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
  }

