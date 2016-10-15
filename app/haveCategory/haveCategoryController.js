(function (angular, prompt) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('haveCategoryController', function ($routeParams, haveService) {
    this.vm = {};
    var vm = this.vm;

    vm['food-water'] = {};

    vm['food-water'].items = [
      {id: 'baby-food', name: 'Baby Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'food', name: 'Regular Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'special-food', name: 'Special Food', icon: 'food-water.png', unit: 'kg', amount: 0},
      {id: 'water', name: 'Water', icon: 'haves-water.png', unit: 'liters', amount: 0}
    ];

    vm['food-water'].items.forEach(function (item) {
      if (haveService.donates(item)) {
        item.amount = haveService.donates(item).amount
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

    function donate(item) {
      var amount = prompt(`How many ${item.unit} of ${item.name} do you have?`);
      if (amount) {
        var savedHave = haveService.donate(item, amount);
        item.amount = savedHave.amount;
      }
    }

    function removeDonation(item) {
      haveService.removeDonation(item);
      item.amount = 0;
    }

    vm.toggleDonation = function (item) {
      if (item.amount > 0) {
        removeDonation(item);
      } else {
        donate(item);
      }
    }
  });

})(window.angular, window.prompt);
