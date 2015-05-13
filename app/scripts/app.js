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

 .run(['$cookies', '$modal', function($cookies, $modal) {

      if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {

        $modal.open({
          templateUrl: '../templates/usermodal.html',
          controller: 'UsernameCtrl',
        })

      }

 }]);


app.factory('Rooms', ['$firebaseArray','Ref', function($firebaseArray, Ref) {

  //var firebaseRef = new Firebase('https://bchat401.firebaseio.com');
  var all = $firebaseArray(Ref.child('rooms'));

  //Add a new chatroom to the List according to input name
  var create = function(newRoom){
    all.$add(newRoom);
  };

  //Remove a room based on name
  var remove = function(name){
    all.$remove(name);
  };

  var messages = function(roomId) {
      // Message query logic
  };

  return {
    all: all,
    create: create, 
    remove: remove
  }
}])
