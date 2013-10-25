/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", []);

    app.directive("myFocus", [function () {
        return {
            link: function (scope, element, attrs) {
                element[0].focus();
            }
        };
    }]);


    app.controller("peopleCtrl", ["$scope",
        function ($scope) {
            $scope.person = {
                firstName: "Maurice",
                lastName: "de Beijer"
            };

            this.save = function () {
                alert("Saving " + $scope.person.firstName +
                    " " + $scope.person.lastName);
            };
        }
    ]);

    app.directive("personEditor", function () {
        return {
            restrict: 'E',
            scope: { thePerson: "=" },
            templateUrl: 'Templates/PersonEditor.html'
        };
    });
}());
