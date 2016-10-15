(function (angular, prompt) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needCategoryController', function ($routeParams, needService) {
    this.vm = {};
    var vm = this.vm;

    vm['food-water'] = {};

    vm['food-water'].items = [
      {id: 'baby-food', name: 'Baby Food', icon: 'food-water.png', amount: 0},
      {id: 'food', name: 'Regular Food', icon: 'food-water.png', amount: 0},
      {id: 'special-food', name: 'Special Food', icon: 'food-water.png', amount: 0},
      {id: 'water', name: 'Water', icon: 'food-water.png', amount: 0}
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

    function need(category) {
      var amount = prompt("For how many people-days?");
      var savedNeed = needService.need(category, amount);
      category.amount = savedNeed.amount;
    }

    function removeNeed(category) {
      needService.removeNeed(category);
      category.amount = 0;
    }

    vm.toggleNeed = function (category) {
      if (category.amount > 0) {
        removeNeed(category);
      } else {
        need(category);
      }
    }
  });

})(window.angular, window.prompt);
