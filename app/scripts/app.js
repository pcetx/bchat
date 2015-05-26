'use strict';

/**
 * @ngdoc overview
 * @name bchatApp
 * @description
 * # bchatApp
 *
 * Main module of the application.
 */
var app = angular.module('bchatApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ui.bootstrap',
    'angular-loading-bar'
])

 app.run(['$cookies', '$modal', function($cookies, $modal) {

      if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {

        // Do something to let users set their usernames
        var modalInstance = $modal.open({
          templateUrl: 'templates/usermodal.html',
          controller: 'ModalInstanceCtrl',
          backdrop: 'static'
        });
        console.log("running");

      }

 }]);

app.factory('Rooms', ['$firebaseArray','Ref', function($firebaseArray, Ref, $scope) {

  //var firebaseRef = new Firebase('https://bchat401.firebaseio.com');
  var all = $firebaseArray(Ref.child('rooms'));
  var messages = $firebaseArray(Ref.child('messages'));

  //$scope.activeRoom = 'new room';
  //var allMessages = $firebaseArray(Ref.child('messages').orderByChild('roomId').equalTo('JpFLawehwKTMoc5KPf5'));

  //Add a new chatroom to the List according to input name
  var create = function(newRoom){
    all.$add(newRoom);
  };

  //Remove a room based on name
  var remove = function(name){
    all.$remove(name);
  };

  //Return all messages for a particular room
  var messages = function(roomId) {
    var allMessages = $firebaseArray(Ref.child('messages').orderByChild('roomId').equalTo(roomId));
    return allMessages;
  };

  return {
    all: all,
    create: create, 
    remove: remove,
    messages: messages
  }
}])

app.factory('Message', ['$firebase', function($firebaseArray, Ref, $scope) {

  //var messages = $firebaseArray(Ref.child('messages'));

  var createMessage = function() {

  };

  return {
    send: function(newMessage) {
      // Send method logic
    }
  }
}])
