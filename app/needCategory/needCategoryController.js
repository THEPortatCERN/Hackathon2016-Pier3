(function (angular, prompt) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needCategoryController', function ($routeParams, needService) {
    this.vm = {};
    var vm = this.vm;

    vm['food-water'] = {};

    vm['food-water'].items = [
      {id: 'baby-food', name: 'Baby Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'food', name: 'Regular Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'special-food', name: 'Special Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'water', name: 'Water', icon: 'needs-water.png', unit: 'liters', amount: 0}
    ];

    vm['food-water'].items.forEach(function (item) {
      if (needService.needs(item)) {
        item.amount = needService.needs(item).amount
      }
    });

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
    };

    function need(item) {
      var amount = prompt(`How many ${item.unit} of ${item.name} do you need?`);
      if (amount) {
        var savedNeed = needService.need(item, amount);
        item.amount = savedNeed.amount;
      }
    }

    function removeNeed(item) {
      needService.removeNeed(item);
      item.amount = 0;
    }

    vm.toggleNeed = function (item) {
      if (item.amount > 0) {
        removeNeed(item);
      } else {
        need(item);
      }
    }
  });

})(window.angular, window.prompt);
