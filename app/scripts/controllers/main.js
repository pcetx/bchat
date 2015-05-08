'use strict';

/**
 * @ngdoc function
 * @name bchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bchatApp
 */
angular.module('bchatApp')
  .controller('MainCtrl', function ($scope, $firebaseArray, Ref) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$scope.rooms = Room.all();
    $scope.rooms = $firebaseArray(Ref.child('rooms').limitToLast(10));
  });


