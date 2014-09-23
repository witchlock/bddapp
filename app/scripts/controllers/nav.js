'use strict';

/**
 * @ngdoc function
 * @name bddappApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the bddappApp
 */
angular.module('bddappApp')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (path) {
            return $location.path() === path;
        };
    }]);

