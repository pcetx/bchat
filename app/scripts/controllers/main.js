'use strict';

/**
 * @ngdoc function
 * @name bchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bchatApp
 */
angular.module('bchatApp')
  .controller('MainCtrl', function ($scope, $firebaseArray, Ref, Rooms) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.rooms = Rooms.all;
    //$scope.rooms = $firebaseArray(Ref.child('rooms').limitToLast(10));

    $scope.clickModal = function (event) {
      if (event.target === event.curentTarget) {
        $scope.showModal = false;
      }
    }; 
    
  });


