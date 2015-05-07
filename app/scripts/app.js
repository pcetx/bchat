'use strict';

/**
 * @ngdoc overview
 * @name bchatApp
 * @description
 * # bchatApp
 *
 * Main module of the application.
 */
angular.module('bchatApp', [
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

// Create a Room factory in Angular that defines all Room-related API queries.
/*
app.factory('Room', ['$firebase', function($firebase) {

  var firebaseRef = new Firebase(bchat);
  var rooms = $firebase(firebaseRef.child('rooms')).$asArray();;

  return {
    all: rooms
  }
}])
*/