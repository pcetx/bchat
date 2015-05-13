'use strict';

/**
 * @ngdoc function
 * @name bchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bchatApp
 */
angular.module('bchatApp')
  .controller('MainCtrl', function ($scope, $firebaseArray, Ref, Rooms, $modal) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.rooms = Rooms.all;
    $scope.animationsEnabled = true;

    $scope.open = function () {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '../templates/modal.html',
        controller: 'ModalInstanceCtrl',
      });
    };

  });

  angular.module('bchatApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, Rooms) {

  //var newRoom = $scope.newRoom

  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
    $scope.rooms = Rooms.create('another room');
     if(Rooms){

     }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


