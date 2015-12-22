(function() {
  'use strict';

  angular
      .module('alexSongApp')
      .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, $http, $filter) {
    MainController.$inject = ['$rootScope', '$scope', '$http', '$filter'];


   // defining variables for handling data and app behavior
    $scope.userImput = "";
    $scope.jasonResult = "";
    $scope.isValidInput = false;
    $scope.searchActivated = false;
    $scope.Obj = [];
    $scope.songList = null;
    $scope.isLoadingData = false;



    $scope.songSearch = function() {
      if ($scope.InputValidation()) {return;}
        initScroll();
      $scope.isLoadingData = true;
      $scope.searchActivated=true;

      $http({
        url: "http://localhost:3000/songs",
        method: "GET"

      }).success(function(data, status, headers, config) {
        //console.log("data alexxx " + data);
        $scope.songList = $filter('filter')(data, $scope.userImput);
        $scope.isLoadingData = false;
      }).error(function(data, status, headers, config) {

      });


      // TO UPLOAD TO SERVER

      /*$scope.Obj = JsonService.getInfo();
      $scope.songList = $filter('filter')($scope.Obj, $scope.userImput);
      $scope.isLoadingData = false;*/

      //}
      $scope.jasonResult = $scope.userImput;
    };


    /*
     Set class for color for background dynamically
     */
    $scope.getBGColor = function(id) {
      if (id % 2 === 0) {
        return 'row1';
      } else {
        return 'row2';
      }
    };


    /*
     validate that user enter a something in the field
     */

    $scope.InputValidation = function() {

      if ($scope.userImput === undefined || $scope.userImput === "") {
        $scope.isValidInput = true;
      } else {
        $scope.isValidInput = false;
      }
        return $scope.isValidInput;
    };


    /*
     translate url on Jason to http://....
     */
    $scope.getSpotyURL = function(uri) {
      var res = '';
      var str = uri;
      if (str.indexOf('album') !== -1) {
        res = str.replace("spotify:album:", "https://open.spotify.com/album/");
      } else if (str.indexOf('track') !== -1) {
        res = str.replace("spotify:track:", "https://open.spotify.com/track/");
      }
      return res;
    };

  }


  function initScroll(){
      $(document).ready(function() {
          $(".flex-container").niceScroll();

      });
  }

})();


