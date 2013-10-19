'use strict';
citytravelApp.controller('FooterCtrl', function FooterCtrl($scope, $http) {
    console.warn(Date());
    var date = new Date();
    $scope.copyright='&#169;&nbsp;'+date.getFullYear()+'&nbsp;Hello World Teem!';

});