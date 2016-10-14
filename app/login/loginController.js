(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('loginController', function () {
    this.vm = {};

    this.vm.submit = function (loginForm) {
      console.log(loginForm);
    }
  });

})(window.angular);
