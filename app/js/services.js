'use strict';

// Custom services

var myServices = angular.module('myServices',['ngResource']);
myServices.value("myValue", "12345");

myServices.factory('Clothe', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'clothes'
      },
      isArray: true,
    }
  });
}]);
