(function (angular, componentHandler) {
  'use strict';

  var app = angular.module('hermitCrabs', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'register/register.html',
        controller: 'registerController',
        controllerAs: 'register'
      })
      .when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/have', {
        templateUrl: 'have/have.html',
        controller: 'haveController',
        controllerAs: 'have'
      })
      .when('/need', {
        templateUrl: 'need/need.html',
        controller: 'needController',
        controllerAs: 'need'
      })
      .when('/need/:category', {
        templateUrl: 'needCategory/needCategory.html',
        controller: 'needCategoryController',
        controllerAs: 'need'
      });
  });

  app.run(function ($rootScope, $location, $timeout) {
    $rootScope.$on('$viewContentLoaded', function () {
      $timeout(function () {
        componentHandler.upgradeAllRegistered();
      });
    });
  });

})(window.angular, window.componentHandler);
