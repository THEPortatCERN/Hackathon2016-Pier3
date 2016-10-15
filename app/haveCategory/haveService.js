(function (angular, localStorage) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('haveService', function () {
    function setObject(key, object) {
      localStorage.setItem(key, JSON.stringify(object));
    }

    function getObject(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    function donate(object, amount) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject(userId) || {};
      var withAmount = angular.copy(object);
      withAmount.amount = amount;
      withAmount.type = 'donate';

      existingRequests[withAmount.id] = withAmount;

      setObject(userId, existingRequests);
      return withAmount;
    }

    function removeDonate(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject(userId) || {};
      if (object.type === 'donate') {
        delete existingRequests[object.id];
      }

      setObject(userId, existingRequests);
    }

    function donates(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      if (!getObject(userId) || !getObject(userId)[object.id] || getObject(userId)[object.id].type !== 'donate') {
        return null;
      }
      return getObject(userId)[object.id];
    }

    function userDonates() {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      if (!getObject(userId)) {
        return [];
      }

      var donates = getObject(userId);
      return Object.keys(donates).filter((key) => donates[key].type === 'donate').map((key) => donates[key]);
    }

    return {
      donate: donate,
      removeDonate: removeDonate,
      donates: donates,
      userDonates: userDonates
    };
  });

})(window.angular, window.localStorage);
