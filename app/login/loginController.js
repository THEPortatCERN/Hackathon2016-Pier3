(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('loginController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    vm.submit = function (loginForm) {
      console.log(loginForm);
    };

    vm.register = function () {
      $location.url('register');
    };
  });

})(window.angular);
