/**
 * Main routing configuration
 **/

angular.module('b&bapp')
  .config(['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider', function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();

    $stateProvider
      .state('app', {
        // url: '',
        abstract: true,
        templateUrl: 'app/app.html'
      })
      .state('app.bank_details', {
        // url: '/signup',
        views: {
          'navbar': {
            templateUrl: 'components/views/navbar.html'
          },
          'login-view': {
            templateUrl: 'app/bank/bank_details.html',
            controller: 'bankController'
          },
          'footer': {
            templateUrl: 'components/views/footer.html'
          }
        }
      })
  }]);
