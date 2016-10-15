(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('matchService', function ($interval, $location, needService, haveService, notificationService) {
    function userCanDonate() {
      var otherNeeds = needService.otherNeeds();
      var userDonates = haveService.userDonates();
      var matches = userDonates.filter((donate) => {
        return otherNeeds.filter((need) => {
            return need.id === donate.id
          }).length > 0
      });

      return matches;
    }

    function userCanReceive() {
      var userNeeds = haveService.otherDonates();
      var otherDonates = needService.userNeeds();
      var matches = otherDonates.filter((need) => {
        return userNeeds.filter((donate) => {
            return need.id === donate.id
          }).length > 0
      });

      return matches;
    }

    function userMatches() {
      return userCanDonate().length > 0 || userCanReceive().length > 0;
    }

    function registerWatcher() {
      console.log('Registering MATCH watcher');

      $interval(function () {
        if (userMatches()) {
          notificationService.setNotification();
        } else {
          notificationService.unsetNotification();
        }
      }, 5 * 1000);
    }

    return {
      registerWatcher: registerWatcher,
      userMatches: userMatches,
      userCanDonate: userCanDonate,
      userCanReceive: userCanReceive
    };
  });

})(window.angular);
