/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", ["ngResource"]);

    app.factory("people", ['$resource',
      function ($resource) {
          return $resource("/api/people/:id", {}, {
              update: {
                  method: "PUT"
              }
          });
      }]);

    app.controller("peopleCtrl", ["$scope", "people",
        function ($scope, people) {
            $scope.currentPerson = null;
            $scope.people = people.query();

            this.select = function (p) {
                $scope.currentPerson = p;
            };

            this.save = function () {
                $scope.currentPerson.$update(function () {
                    alert("Saving " + $scope.currentPerson.firstName +
                        " " + $scope.currentPerson.lastName);

                    $scope.currentPerson = null;
                });
            };
        }
    ]);
}());
