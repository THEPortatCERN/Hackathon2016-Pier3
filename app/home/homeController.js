(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('homeController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    vm.navigateTo = function (url) {
      $location.url(url)
    };
  });

})(window.angular);
