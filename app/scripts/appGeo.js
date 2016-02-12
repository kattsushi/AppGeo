'use strict';

angular.module('appGeo', ['ngAnimate',
                          'ngCookies',
                          'ngSanitize',
                          'firebase',
                          'ngResource',
                          'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
