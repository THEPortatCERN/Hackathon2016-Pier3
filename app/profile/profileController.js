(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('profileController', function ($location, needService) {
    this.vm = {};
    var vm = this.vm;

    vm.needs = needService.userNeeds();
  });

})(window.angular);
