(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needController', function ($location) {
    this.vm = {};
    var vm = this.vm;

    vm.items = [
      {id: 'food-water', name: 'Food / Water', icon: 'food-water.png'},
      {id: 'shelter', name: 'Shelter', icon: 'shelter.png'},
      {id: 'shelter', name: 'Shelter', icon: 'shelter.png'},
      {id: 'sanitation', name: 'Sanitation', icon: 'sanitation.png'}
    ];

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
      $location.url('need/' + categoryId);
    };
  });

})(window.angular);
