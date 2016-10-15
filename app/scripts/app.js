(function (angular, componentHandler) {
  'use strict';

  var app = angular.module('hermitCrabs', ['ngRoute', 'ngAnimate']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'profile/profile.html',
        controller: 'profileController',
        controllerAs: 'profile'
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
      .when('/have/:category', {
        templateUrl: 'haveCategory/haveCategory.html',
        controller: 'haveCategoryController',
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
      })
      .when('/confirmation', {
        templateUrl: 'confirmation/confirmation.html',
        controller: 'confirmationController',
        controllerAs: 'confirmation'
      })
      .when('/user/:id', {
        templateUrl: 'userInfo/userInfo.html',
        controller: 'userInfoController',
        controllerAs: 'user'
      })
      .when('/lost', {
        templateUrl: 'lost/lostList.html',
        controller: 'lostListController',
        controllerAs: 'lost'
      })
      .when('/lost/report', {
        templateUrl: 'lost/reportLost.html',
        controller: 'reportLostController',
        controllerAs: 'lost'
      });
  });

  app.run(function ($rootScope, $location, $timeout, matchService) {
    matchService.registerWatcher();

    $rootScope.$on('$viewContentLoaded', function () {
      $timeout(function () {
        componentHandler.upgradeAllRegistered();
      });
    });
  });

})(window.angular, window.componentHandler);
