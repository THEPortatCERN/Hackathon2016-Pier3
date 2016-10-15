(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('userInfoController', function ($routeParams, userService) {
    this.vm = {};
    var vm = this.vm;

    vm.info = userService.getInfo($routeParams.id);
  });

})(window.angular);
