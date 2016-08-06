//import { Es6Ctrl } from 'es6lib.js';
//export { Es7Ctrl };
define([
    'lib/es6a'
], (Es6aCtrl) => class Es6bCtrl extends Es6aCtrl {

    /**
     * @constructor
     * @param $scope
     */
    constructor($scope) {
        super($scope);
        // $scope.es8 = ' overriden in Es6bCtrl constructor!';
    }

    /**
     * b benefits from super (a) method
     * @returns {*}
     */
    es6() {
        return super.es6() + ':)';
    }

    /**
     * b overrides a
     * @returns {string}
     */
    es7() {
        return 'Es7Ctrl es7b overriden in Es6bCtrl';
    }

    // b's es8 is undefined, so super class is inherited
    // es8() {
    //     return 'Es7Ctrl es8b';
    // }
});
