(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('haveController', function () {
    this.vm = {};
    var vm = this.vm;

    vm.mainItems = [
      {id: 'food-water', name: 'Food / Water', icon: 'food-water.png'},
      {id: 'shelter', name: 'Shelter', icon: 'shelter.png'}
    ];

    vm.secondaryItems = [
      {id: 'sanitation', name: 'Sanitation', icon: 'sanitation.png'},
      {id: 'family-tracing', name: 'Family Tracing', icon: 'sanitation.png'}
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

  });

})(window.angular);
