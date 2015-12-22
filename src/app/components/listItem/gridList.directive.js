(function() {
    'use strict';

    angular
        .module('alexSongApp')
        .directive('gridList', gridList);

    /** @ngInject */
    function gridList() {
        var directive = {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/components/listItem/gridList.html'
        };

        return directive;
    }

})();
