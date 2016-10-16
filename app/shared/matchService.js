(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('matchService', function ($interval, $location, needService, haveService, notificationService) {
    function userCanDonate() {
      var otherNeeds = needService.otherNeeds();
      var userDonates = haveService.userDonates();

      return userDonates.filter((donate) => {
        return otherNeeds.filter((need) => {
            return need.id === donate.id
          }).length > 0
      });
    }

    function userCanReceive() {
      var otherDonates = haveService.otherDonates();
      var userNeeds = needService.userNeeds();

      return otherDonates.filter((need) => {
        return userNeeds.filter((donate) => {
            return need.id === donate.id
          }).length > 0
      });
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
