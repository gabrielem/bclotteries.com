'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'mgcrea.ngStrap'
])
.value('$anchorScroll', angular.noop)

  .config([

    '$routeProvider', '$compileProvider',

    function ($routeProvider,$compileProvider) {

      $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|bitcoin):/);


    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl',
    })
    .when('/999', {
      templateUrl: 'views/999.html',
      controller: 'MainCtrl',
    })
    .when('/99', {
      templateUrl: 'views/99.html',
      controller: 'MainCtrl',
    })
    .when('/9', {
      templateUrl: 'views/9.html',
      controller: 'MainCtrl',
    })
    .when('/best-winners', {
      templateUrl: 'views/best-winners.html',
      controller: 'MainCtrl',
    })

    .when('/provably-fair', {
      templateUrl: 'views/provably-fair.html',
      controller: 'MainCtrl',
    })
    .when('/faq', {
      templateUrl: 'views/faq.html',
      controller: 'MainCtrl',
    })
    .when('/contact-us', {
      templateUrl: 'views/contact-us.html',
      controller: 'MainCtrl',
    })









      /*.otherwise({
        redirectTo: '/'
      })*/
      ;
    },

/*
    '$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|bitcoin):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    },
*/

]
);
