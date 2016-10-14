(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('homeController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    vm.need = function () {
      $location.url('need');
    };

    vm.have = function () {
      $location.url('have');
    };
  });

})(window.angular);
