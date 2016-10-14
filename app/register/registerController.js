(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('registerController', function () {
    this.vm = {};
    var vm = this.vm;

    vm.step = 1;

    vm.next = function () {
      vm.step += 1;
    }
  });

})(window.angular);
