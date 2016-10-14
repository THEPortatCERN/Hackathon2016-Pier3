(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('homeController', function ($location) {
    this.vm = {};

    this.vm.need = function () {
      $location.url('need');
    };

    this.vm.have = function () {
      $location.url('have');
    };
  });

})(window.angular);
