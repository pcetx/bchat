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
]);

app.factory('Rooms', ['$firebaseArray','Ref', function($firebaseArray, Ref) {

  //var firebaseRef = new Firebase('https://bchat401.firebaseio.com');
  var all = $firebaseArray(Ref.child('rooms'));

  //Add a new chatroom to the List according to input name
  var create = function(name){
    all.$add(name);
  };

  //Remove a room based on name
  var remove = function(name){
    all.$remove(name);
  };

  return {
    all: all,
    create: create, 
    remove: remove
  }
}])
