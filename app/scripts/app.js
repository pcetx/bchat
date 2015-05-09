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
    'angular-loading-bar',
    'ui.bootstrap'  
]);

app.factory('Room', ['$firebase', function($firebase) {

  var firebaseRef = new Firebase('https://bchat401.firebaseio.com');
  var rooms = $firebase(firebaseRef.child('rooms')).$asArray();;

  return {
    all: rooms
  }
}])
