//export { Es6Ctrl };

define(() => class Es6aCtrl {
    /**
     * @constructor
     * @param $scope
     */
    constructor($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.es6 = this.es6();
        $scope.es7 = this.es7();
        $scope.es8 = this.es8();
    }

    /**
     * some method
     * @returns {string}
     */
    es6() {
        return 'Es6Ctrl e6a';
    }

    /**
     * some method
     * @returns {string}
     */
    es7() {
        return 'Es6Ctrl e7a';
    }

    /**
     * some method
     * @returns {string}
     */
    es8() {
        return 'Es6Ctrl e8a';
    }

});
