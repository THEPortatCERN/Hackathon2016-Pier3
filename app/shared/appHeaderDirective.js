(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.directive('appHeader', function ($window, $location) {
    return {
      restrict: 'A',
      scope: {
        location: '=locationDirective'
      },
      template: `
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title" ng-click="navigateTo('home')">EMBRACE</span>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" ng-click="navigateTo('profile')">Profile</a>
            <a class="mdl-navigation__link" ng-click="back()">Back</a>
          </nav>
        </div>
      `,
      link: function (scope, elem, attrs) {
        scope.navigateTo = function (targetUrl) {
          $location.url(targetUrl);
        };

        scope.back = function () {
          $window.history.back();
        };
      }
    };
  });

})(window.angular);
