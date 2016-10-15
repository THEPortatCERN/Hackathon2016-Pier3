(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('registerController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    vm.step = 0;
    vm.stepNames = ['username', 'gender', 'group', 'location'];

    vm.user = {
      name: '',
      phone: '',
      email: '',
      username: '',
      gender: '',
      location: ''
    };

    // No back end yet.
    function register(user) {
      return true;
    }

    vm.selectGender = function (gender) {
      vm.user.gender = gender;
      vm.next();
    };

    vm.next = function () {
      if (vm.step + 1 < vm.stepNames.length) {
        vm.step += 1;
      } else {
        if (register(vm.user)) {
          $location.url('home');
        }
      }
    };

    vm.back = function () {
      if (vm.step - 1 >= 0) {
        vm.step -= 1;
      } else {
        $location.url('/');
      }
    };
  });

})(window.angular);
