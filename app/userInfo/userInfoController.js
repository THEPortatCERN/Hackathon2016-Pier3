(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.controller('userInfoController', function ($routeParams, $sce, userService) {
    this.vm = {};
    var vm = this.vm;

    var API_KEY = 'AIzaSyB4xM4w0L4gHV7OY8PaMlWsC6bkdNPEQks';

    vm.info = userService.getInfo($routeParams.id);

    vm.mapUrl = $sce.trustAsResourceUrl(`https://www.google.com/maps/embed/v1/place?q=${vm.info.location}&key=${API_KEY}`);
    vm.streetUrl = $sce.trustAsResourceUrl(`https://www.google.com/maps/embed/v1/streetview?location=${vm.info.location}&key=${API_KEY}`);
  });

})(window.angular);
