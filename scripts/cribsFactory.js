/**
 * Created by Kavi on 3/21/17.
 */
angular
    .module('ngCribs')
    .factory('cribsFactory', function($http){


        function getCribs(){
            return $http.get('data/data.json');
        }

        return{
            getCribs: getCribs
        }
})