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
    //var roomname = $scope.roomname;
    $scope.activeRoom = null;

    $scope.setActiveRoom = function(room) {
      // Change the title of the room
      $scope.activeRoom = 'Room name';
      //Display only the messages for that particular room
      var messages = $firebaseArray(Ref.child('messages'));
      $scope.messages = Rooms.messages('room');
      console.log('new room');
    }


    $scope.open = function () {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '../templates/modal.html',
        controller: 'ModalInstanceCtrl',
      });
    };



  });

  angular.module('bchatApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, Rooms) {

  $scope.ok = function() {
    $modalInstance.dismiss('cancel');
    $scope.rooms = Rooms.create($scope.newRoom);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.setUsername = function() {
    if ($scope.userName !== null) {
      $modelInstance.dismiss();
      $cookies.put($scope.userName);
    };
  };

});


