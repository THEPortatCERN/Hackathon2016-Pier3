(function (angular, prompt) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('haveCategoryController', function ($routeParams, haveService, categoryService) {
    this.vm = {};
    var vm = this.vm;

    vm.items = (function () {
      var subcategories = categoryService.getSubcategories($routeParams.category);
      subcategories.forEach(function (item) {
        if (haveService.donates(item)) {
          item.amount = haveService.donates(item).amount
        }
      });
      return subcategories;
    })();

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
      haveService.removeDonate(item);
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
