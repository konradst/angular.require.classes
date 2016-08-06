//import { Es7Ctrl } from 'es7.js';
define([
    'angular',
    'lib/es6b'
], (angular, Es6bCtrl) => {
    'use strict';

    /**
     * @ngdoc function
     * @name publicHtmlApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the publicHtmlApp
     */
    angular.module('publicHtmlApp.controllers.Es6bCtrl', [])
        .controller('Es6bCtrl', ['$scope', Es6bCtrl]);
});
