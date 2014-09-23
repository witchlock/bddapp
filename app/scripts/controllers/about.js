'use strict';

/**
 * @ngdoc function
 * @name bddappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bddappApp
 */
angular.module('bddappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
