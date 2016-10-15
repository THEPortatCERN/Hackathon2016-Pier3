(function (angular, localStorage) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('needService', function () {
    var MAX_NEEDS = 2;

    function setObject(key, object) {
      localStorage.setItem(key, JSON.stringify(object));
    }

    function getObject(key) {
      return JSON.parse(localStorage.getItem(key));
    }

    function need(object, amount) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject(userId) || {};
      if (Object.keys(existingRequests).length < MAX_NEEDS) {
        var withAmount = angular.copy(object);
        withAmount.amount = amount;

        existingRequests[withAmount.id] = withAmount;

        setObject(userId, existingRequests);
        return withAmount;
      } else {
        alert(`You can request up to ${MAX_NEEDS} skills or resources. Please prioritize.`);
        return object;
      }
    }

    function removeNeed(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject(userId) || {};
      delete existingRequests[object.id];

      setObject(userId, existingRequests);
    }

    function needs(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      if (!getObject(userId)) {
        return null;
      }
      return getObject(userId)[object.id] || null;
    }

    function userNeeds () {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      if (!getObject(userId)) {
        return [];
      }

      var needs = getObject(userId);
      return Object.keys(needs).map((key) => needs[key]);
    }

    return {
      need: need,
      removeNeed: removeNeed,
      needs: needs,
      userNeeds: userNeeds
    };
  });

})(window.angular, window.localStorage);
