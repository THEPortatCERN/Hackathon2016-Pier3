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
        phone: '+541158930932',
        location: '48.392738,14.062500'
      },
      2: {
        username: 'HelpingHand',
        name: 'Good Samaritan',
        email: 'helping.hand@gmail.com',
        phone: '+541187898765',
        location: '-34.567382,-58.458784'
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
