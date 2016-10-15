(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('profileController', function ($location, needService, haveService) {
    this.vm = {};
    var vm = this.vm;

    vm.needs = needService.userNeeds();
    vm.donations = haveService.userDonates();
  });

})(window.angular);
