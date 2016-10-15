(function (angular, localStorage) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('haveService', function () {
    function setObject(object) {
      localStorage.setItem('hermit-crabs-donates', JSON.stringify(object));
    }

    function getObject() {
      return JSON.parse(localStorage.getItem('hermit-crabs-donates')) || [];
    }

    function donate(object, amount) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject() || [];

      var donatesObject = angular.copy(object);
      donatesObject.amount = amount;
      donatesObject.type = 'donate';
      donatesObject.userId = userId;

      existingRequests.push(donatesObject);

      setObject(existingRequests);
      return donatesObject;
    }

    function removeDonate(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject() || [];

      var newRequests = existingRequests.filter((item) => {
        return item.userId !== userId || item.id !== object.id
      });

      setObject(newRequests);
    }

    function donates(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      return getObject().filter((item) => item.userId === userId && item.id === object.id && item.type === 'donate')[0];
    }

    function userDonates() {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      var needs = getObject(userId);
      return needs.filter((item) => item.userId === userId && item.type === 'donate');
    }

    return {
      donate: donate,
      removeDonate: removeDonate,
      donates: donates,
      userDonates: userDonates
    };
  });

})(window.angular, window.localStorage);
