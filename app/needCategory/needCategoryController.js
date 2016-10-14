(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needCategoryController', function ($routeParams) {
    this.vm = {};
    var vm = this.vm;

    vm['food-water'] = {};

    vm['food-water'].items = [
      {id: 'baby-food', name: 'Baby Food', icon: 'food-water.png'},
      {id: 'food', name: 'Regular Food', icon: 'food-water.png'},
      {id: 'special-food', name: 'Special Food', icon: 'food-water.png'},
      {id: 'water', name: 'Water', icon: 'food-water.png'}
    ];

    vm.items = (this.vm[$routeParams.category] || {items: []}).items;

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
    }
  });

})(window.angular);
