/**
 * Created by Kavi on 3/21/17.
 */
angular
    .module('ngCribs', ['ui.bootstrap'])
    .controller('cribsController', function($scope, cribsFactory){
             $scope.cribs = cribsFactory.getCribs();
        });