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
    'firebase.auth'
]);

app.factory('Rooms', ['$firebaseArray','Ref', function($firebaseArray, Ref) {

  //var firebaseRef = new Firebase('https://bchat401.firebaseio.com');
  var all = $firebaseArray(Ref.child('rooms').limitToLast(10));
  var create = function(name){

  };
  return {
    all: all,
    create: create 

  }
}])
