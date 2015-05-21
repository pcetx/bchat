'use strict';
/**
 * @ngdoc function
 * @name bchatApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('bchatApp')
  .controller('ChatCtrl', function ($scope, Ref, $firebaseArray, $timeout, Rooms) {

    var messages = $firebaseArray(Ref.child('messages'));
    //$scope.activeRoom = 'active';
    $scope.messages = Rooms.messages('JpFLawehwKTMoc5KPf5');
    //$scope.messageContent = Rooms.messages.on("value", content);
    //$scope.messageTime = Rooms.messages('JpFLawehwKTMoc5KPf5').sentAt;
    //$scope.messageSender = Rooms.messages('JpFLawehwKTMoc5KPf5').content;
    

  });
