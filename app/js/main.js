(function() {
    'use strict';
    var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria'])
        
        .filter('locationTime', function() {
          return  function convertTimestamp(timestamp) {
                var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
                    yyyy = d.getFullYear(),
                    mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
                    dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
                    hh = d.getHours(),
                    h = hh,
                    min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
                    ampm = 'AM',
                    time;
                if (hh > 12) {
                    h = hh - 12;
                    ampm = 'PM';
                } else if (hh === 12) {
                    h = 12;
                    ampm = 'PM';
                } else if (hh == 0) {
                    h = 12;
                }
                // ie: 2013-02-18, 8:35 AM
                time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
                return time;
            }
        });
    app.controller('formController', function($scope, $mdDialog) {
        $scope.forget = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './templates/forget.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        function DialogController($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
        }
    }).controller('DashBoardCtrl', function($scope, $timeout, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
        
        $scope.fadeAnimation = false;
    });
})();
