(function() {
    'use strict';

    angular
        .module('alexSongApp')
        .directive('listItems', listItems);

    /** @ngInject */
    function listItems() {
        var directive = {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/components/listItem/listItems.html'
        };

        return directive;
    }

})();
