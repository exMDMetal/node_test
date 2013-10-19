'use strict';
citytravelApp.controller('MapCtrl', function PhoneListCtrl($scope, $http) {
    $http.get('/api/type').success(function(data) {
        $scope.places = data;
     });



});