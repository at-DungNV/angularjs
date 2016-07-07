
'use strict';

var templateApp = angular.module('templateApp', [
  'ngRoute',
  'templateControllers',
  'myServices',
  'angularPayments',
  'mm.foundation', 
  'ngAnimate', 
  'angularSpinner'
]);

templateApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController'
    })
    .when('/clothes', {
      templateUrl: 'view/clothes.html',
      controller: 'ClothesController'
    })
    .otherwise({redirectTo: '/about'});
}]);
