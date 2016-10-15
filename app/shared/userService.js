(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('userService', function () {
    // TODO: HTTP Request.
    var usersDb = {
      1: {
        username: 'gonchub',
        name: 'Gonzalo Beviglia',
        email: 'gonzalo.beviglia@gmail.com',
        phone: '541158930932',
        location: '48.392738,14.062500'
      },
      2: {
        username: 'batigol',
        name: 'Gabriel Batistuta',
        email: 'gabriel.batistuta@gmail.com',
        phone: '541187898765',
        location: '47.392738,15.062500'
      }
    };

    function getInfo(userId) {
      return usersDb[userId]
    }

    return {
      getInfo: getInfo
    };
  });

})(window.angular);
