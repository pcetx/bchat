'use strict';
/**
 * @ngdoc function
 * @name bchatApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('bchatApp')
  .controller('ChatCtrl', function ($scope, Ref, $firebaseArray, $timeout, Rooms, Message) {

    var messages = $firebaseArray(Ref.child('messages'));

    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.messages.$add({content: newMessage, sentAt: Firebase.ServerValue.TIMESTAMP, username: 'John', roomId:'-JpFLawehwKTMoc5KPf5' })
          // display any errors
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }

  });
