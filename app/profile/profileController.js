(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('profileController', function ($location, needService, haveService, matchService) {
    this.vm = {};
    var vm = this.vm;

    vm.needs = needService.userNeeds();
    vm.donations = haveService.userDonates();
    vm.matches = matchService.userMatches();

    vm.goToMatches = function () {
      $location.url('confirmation');
    }
  });

})(window.angular);
