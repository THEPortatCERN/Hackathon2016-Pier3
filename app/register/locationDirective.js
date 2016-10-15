(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.directive('locationDirective', function () {
    return {
      restrict: 'A',
      scope: {
        location: '=locationDirective'
      },
      template: `
        <button class="mdl-button mdl-js-button mdl-button--raised" ng-click="enableLocation()"
                type="button" ng-show="locationEnabled">
          Enable Location
        </button>
        <div class="mdl-textfield mdl-js-textfield">
          <label class="mdl-textfield__label" for="location">
            Username
          </label>
          <div class="mdl-spinner mdl-js-spinner is-active" ng-show="isLoading"></div>
          <input class="mdl-textfield__input" type="text" name="location" id="location"
                 ng-model="location" placeholder="12.1,-2.3">
        </div>
      `,
      link: function (scope, elem, attrs) {
        scope.isLoading = false;
        scope.locationEnabled = true;

        scope.enableLocation = function () {
          scope.isLoading = true;
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              scope.$apply(function () {
                scope.isLoading = false;
                showPosition(position);
              });
            });
          } else {
            scope.isLoading = false;
          }
        };

        function showPosition(position) {
          scope.location = `${position.coords.latitude},${position.coords.longitude}`;
        }
      }
    };
  });

})(window.angular);
