(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('haveController', function ($location, categoryService) {
    this.vm = {};
    var vm = this.vm;

    vm.items = categoryService.getCategories();

    function imagePath(folder, filename) {
      var path = 'url';
      path += '(';
      path += folder;
      path += '/';
      path += filename;
      path += ')';

      return path
    }

    vm.iconPath = function (iconName) {
      return {'background-image': imagePath('../images', iconName)};
    };

    vm.needCategory = function (categoryId) {
      $location.url('have/' + categoryId);
    };
  });

})(window.angular);
