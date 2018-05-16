'use strict';

angular.module('b&bapp')

.factory("appService", ['$rootScope','$q', '$resource', '$http', function($rootScope,$q, $resource, $http) {
  
  var request = {        
    getBankDetails: $resource('api/bank/fetch-details', {}, { get: { method: 'GET', headers: {
          'Content-Type': 'application/json','Accept': 'application/json'  }} })
  };

  var appservice = {};


  appservice.get_Bank_Details = function (params) {
    var deferred = $q.defer();
    request.getBankDetails.get(params, function (success) {
      if (success) {
        deferred.resolve(success);
      } else {
        deferred.resolve(success);
      }
    }, function (error) {
      deferred.reject(error);
    });
    return( deferred.promise );
  };

  return appservice;

}]);
