(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needController', function ($location, categoryService) {
    this.vm = {};
    var vm = this.vm;

    vm.items = categoryService.getCategories();

    function imagePath(folder, filename) {
      var path = 'url';
      path += '(';
      path += folder;
      path += '/';
      path += '[have]';
      path += filename;
      path += ')';

      return path
    }

    vm.iconPath = function (category) {
      return {'background-image': imagePath(`../images/${category.folder}`, category.icon)};
    };

    vm.needCategory = function (categoryId) {
      $location.url('need/' + categoryId);
    };
  });

})(window.angular);
