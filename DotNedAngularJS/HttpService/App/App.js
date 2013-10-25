/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", []);


    app.controller("peopleCtrl", ["$scope", "$http",
        function ($scope, $http) {
            $scope.currentPerson = null;
            $scope.people = [];

            $http.get("/api/people").success(function (data) {
                $scope.people = data;
            });

            this.select = function (p) {
                $scope.currentPerson = p;
            };

            this.save = function () {
                alert("Saving " + $scope.currentPerson.firstName +
                    " " + $scope.currentPerson.lastName);

                $scope.currentPerson = null;
            };
        }
    ]);
}());
