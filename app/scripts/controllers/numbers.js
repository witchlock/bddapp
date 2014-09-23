'use strict';

/**
 * @ngdoc function
 * @name bddappApp.controller:NumbersCtrl
 * @description
 * # NumbersCtrl
 * Controller of the bddappApp
 */
angular.module('bddappApp')
    .controller('NumbersCtrl', function ($scope) {
        function is10Digits(number) {
            return !number || number.match(/\d{10}/g);
        }

        $scope.process = function () {
            $scope.errors = [];
            if (!is10Digits($scope.mobileNumber) || !is10Digits($scope.altNumber1) || !is10Digits($scope.altNumber2)) {
                $scope.errors.push('Please enter a valid number');
            }

            if ($scope.form.mobileNumber.$error.required && $scope.form.altNumber1.$error.required && $scope.form.altNumber2.$error.required) {
                $scope.errors.push('Please enter at least one number');
            }

            console.log($scope.errors);
        };
    });
