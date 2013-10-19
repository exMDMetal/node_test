'use strict';
var citytravelApp = angular.module('citytravelApp', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'templates/map.html', controller: 'MapCtrl'})
            .otherwise({redirectTo: '/'});
    },
    ]);