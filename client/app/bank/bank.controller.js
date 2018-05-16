'use strict';

angular.module('b&bapp')

.controller('bankController', ['$scope', '$rootScope', 'appService', '$state', '$http', function($scope, $rootScope, appService, $state, $http) {

  var init = function(){
  	$scope.bank_params = {};
		$scope.form = {};
		$scope.banks = [];
		$scope.search_options = [{'id':1, 'value':'IFSC Code'}, {'id':2, 'value':'Bank and City'}];
	  $scope.bank_params.opt = $scope.search_options[0];
  };

  $scope._getBankDetails = function() {

  	var params = {
  		'search_type' : $scope.bank_params.opt.id,
  		'ifsc_code' : $scope.bank_params && $scope.bank_params.ifsc ? $scope.bank_params.ifsc : null,
  		'bank_name' : $scope.bank_params && $scope.bank_params.name ? $scope.bank_params.name : null,
  		'bank_city' : $scope.bank_params && $scope.bank_params.city ? $scope.bank_params.city : null
  	}

  	appService.get_Bank_Details(params).then(function(response) {
      if (response && response.success) {
      	$scope.banks = angular.copy(response.success.payload);
      } else {
      	alert(response.error.message);
      }
      init();
    },
    function handleError (error){
      console.log(error)
    });

  }

  init();

}]);