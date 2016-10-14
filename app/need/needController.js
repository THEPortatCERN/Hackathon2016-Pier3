(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('needController', function ($location) {
    this.vm = {};

    this.vm.items = [
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

    this.vm.iconPath = function (iconName) {
      return {'background-image': imagePath('../images', iconName)};
    };

    this.vm.needCategory = function (categoryId) {
      $location.url('need/' + categoryId);
    };
  });

})(window.angular);
