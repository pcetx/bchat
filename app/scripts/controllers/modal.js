'use strict';

/**
 * @ngdoc function
 * @name bchatApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the bchatApp
 */
angular.module('bchatApp')
  .controller('ModalCtrl', function ($scope) {

    $scope.clickModal = function (event) {
      if (event.target === event.curentTarget) {
        $scope.showModal = false;
      }
    }; 

  });