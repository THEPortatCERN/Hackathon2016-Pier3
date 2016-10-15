(function (angular, localStorage) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('needService', function () {
    var MAX_NEEDS = 2;

    function setObject(object) {
      localStorage.setItem('hermit-crabs-needs', JSON.stringify(object));
    }

    function getObject() {
      return JSON.parse(localStorage.getItem('hermit-crabs-needs')) || [];
    }

    function need(object, amount) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject() || [];
      var userRequests = existingRequests.filter((item) => item.userId === userId);

      if (userRequests.length < MAX_NEEDS) {
        var needObject = angular.copy(object);
        needObject.amount = amount;
        needObject.type = 'need';
        needObject.userId = userId;

        existingRequests.push(needObject);

        setObject(existingRequests);
        return needObject;
      } else {
        alert(`You can request up to ${MAX_NEEDS} skills or resources. Please prioritize.`);
        return object;
      }
    }

    function removeNeed(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      // TODO: Server request!
      var existingRequests = getObject() || [];

      var newRequests = existingRequests.filter((item) => {
        return item.userId !== userId || item.id !== object.id
      });

      setObject(newRequests);
    }

    function needs(object) {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      return getObject().filter((item) => item.userId === userId && item.id === object.id && item.type === 'need')[0];
    }

    function userNeeds() {
      // TODO: user id should be stored in a constant/service.
      var userId = 1;

      var needs = getObject(userId);
      return needs.filter((item) => item.userId === userId && item.type === 'need');
    }

    return {
      need: need,
      removeNeed: removeNeed,
      needs: needs,
      userNeeds: userNeeds
    };
  });

})(window.angular, window.localStorage);
