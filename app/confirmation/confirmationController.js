(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('confirmationController', function ($location, matchService, userService) {
    this.vm = {};
    var vm = this.vm;

    vm.donations = matchService.userCanDonate();
    vm.receptions = matchService.userCanReceive();
    vm.userInfo = userService.getInfo;

    vm.showUser = function (userId) {
      $location.url(`user/${userId}`);
    }
  });

})(window.angular);
