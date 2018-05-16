'use strict';

angular.module('b&bapp', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCookies', 'ngSanitize', 'blockUI'])

.config(['blockUIConfig', function(blockUIConfig) {
  blockUIConfig.message = 'loading';
  blockUIConfig.delay = 100;
  blockUIConfig.resetOnException = true;
}])

.controller('appCtrl', ['$scope', '$rootScope', 'appService', '$state', '$http', function($scope, $rootScope, appService, $state, $http) {

  $state.transitionTo('app.bank_details');

}])