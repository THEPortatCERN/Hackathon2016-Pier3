(function (angular, componentHandler) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.directive('notification', function ($location, $interval, notificationService) {
    return {
      restrict: 'A',
      replace: true,
      scope: {},
      template: `
        <div id="notification-container" class="mdl-js-snackbar mdl-snackbar">
          <div class="mdl-snackbar__text"></div>
          <button class="mdl-snackbar__action" type="button"></button>
        </div>
      `,
      link: function (scope, elem, attrs) {
        var notificationActive = false;

        function goToConfirmation() {
          scope.$apply(function () {
            notificationService.unsetNotification();
            $location.url('confirmation');
          });
        }

        function showNotification() {
          notificationActive = true;
          var data = {
            message: 'You have a match!',
            timeout: 5 * 1000,
            actionHandler: goToConfirmation,
            actionText: 'Show'
          };
          elem[0].MaterialSnackbar.showSnackbar(data);
        }

        $interval(function () {
          if (!notificationActive && notificationService.hasNotification()) {
            showNotification();
          }
        }, 3 * 1000);
      }
    };
  });

})(window.angular, window.componentHandler);
