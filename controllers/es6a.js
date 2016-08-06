//import { Es6Ctrl } from 'es6.js';
define([
    'angular',
    'lib/es6a'
], (angular, Es6aCtrl) => {
    'use strict';

    /**
     * @ngdoc function
     * @name publicHtmlApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the publicHtmlApp
     */
    angular.module('publicHtmlApp.controllers.Es6aCtrl', [])
        .controller('Es6aCtrl', ['$scope', Es6aCtrl]);
});
