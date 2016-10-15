(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('lostService', function () {
    var lost = [
      {name: '', gender: '', imageUrl: '', description: '', reporter: 1}
    ];

    function getLost() {
      return lost;
    }

    function reportLost(report) {
      lost.push(report);
    }

    return {
      getLost: getLost,
      reportLost: reportLost
    };
  });

})(window.angular);
