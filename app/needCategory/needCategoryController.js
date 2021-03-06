(function (angular, prompt) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needCategoryController', function ($routeParams, needService, categoryService) {
    this.vm = {};
    var vm = this.vm;

    vm.items = (function () {
      var subcategories = categoryService.getSubcategories($routeParams.category);
      subcategories.forEach(function (item) {
        if (needService.needs(item)) {
          item.amount = needService.needs(item).amount
        }
      });
      return subcategories;
    })();

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

    function need(item) {
      // TODO: Scale it up using family info.
      var amount = 1;
      var savedNeed = needService.need(item, amount);
      item.amount = savedNeed.amount;
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
