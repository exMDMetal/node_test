'use strict';
citytravelApp.controller('HeaderCtrl', function HeaderCtrl($scope, $http) {
    $scope.serch= '';
    $scope.result='';
    $scope.serchPlaces = function() {
            console.log('colo');
            $http('GET','/places/serch/'+$scope.serch, function(data){
                $scope.result = data;
            })
        }


});