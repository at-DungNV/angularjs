'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute','myServices' 
]);

templateControllers.controller('AboutController', ['$scope', '$route',
  function ($scope, $route) {
    $scope.template = $route.current.templateUrl;
}]);

templateControllers.controller('ClothesController', ['$scope', '$http', '$modal', '$routeParams',
  function ($scope, $http, $modal) { 
      $scope.cart = [];
      
  		$http.get('http://localhost:8008/json/clothes.json').success(function (response) {
  			$scope.clothes = response.clothes;
  		});
      
  		$scope.addToCart = function (clothe) {
  			var found = false;
  			$scope.cart.forEach(function (item) {
  				if (item.id === clothe.id) {
  					item.quantity++;
  					found = true;
  				}
  			});
  			if (!found) {
  				$scope.cart.push(angular.extend({quantity: 1}, clothe));
  			}
  		};
      
      $scope.getCartPrice = function () {
			  var total = 0;
			  $scope.cart.forEach(function (clothe) {
				total += clothe.price * clothe.quantity;
			});
      
			return total;
		};
        
    $scope.removeClothe = function (clotheId) {
      $scope.clothes.splice(clotheId, 1);
    };
    
    $scope.onSubmit = function () {
			$scope.processing = true;
		};

		$scope.stripeCallback = function (code, result) {
			$scope.processing = false;
			$scope.hideAlerts();
			if (result.error) {
				$scope.stripeError = result.error.message;
			} else {
				$scope.stripeToken = result.id;
			}
		};

		$scope.hideAlerts = function () {
			$scope.stripeError = null;
			$scope.stripeToken = null;
		};
    
}]);
