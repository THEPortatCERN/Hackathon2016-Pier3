(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('notificationService', function () {
    var notification = false;

    function setNotification() {
      notification = true;
    }

    function unsetNotification() {
      notification = false;
    }

    function hasNotification() {
      return notification === true;
    }

    return {
      setNotification: setNotification,
      unsetNotification: unsetNotification,
      hasNotification: hasNotification
    };
  });

})(window.angular);
