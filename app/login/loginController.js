(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('loginController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    // No backend yet.
    function signIn(user) {
      return true;
    }

    vm.submit = function (user) {
      if (signIn(user)) {
        $location.url('home');
      }
    };

    vm.register = function () {
      $location.url('register');
    };
  });

})(window.angular);
