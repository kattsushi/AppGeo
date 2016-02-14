'use strict';

angular
  .module('appGeo', ['ngAnimate',
                     'ngCookies',
                     'ngSanitize',
                     'firebase',
                     'ngResource',
                     'ngRoute'   ])
  .config(['$routeProvider',
           '$locationProvider',
              appConfig])
  
  
  
  
  function appConfig ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      $locationProvider.hashPrefix('!');
  }
;
