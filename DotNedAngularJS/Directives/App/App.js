/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", []);


    app.controller("peopleCtrl", ["$scope",
        function ($scope) {
            $scope.currentPerson = null;

            $scope.people = [
                {
                    "firstName": "Park",
                    "lastName": "Cote"
                },
                {
                    "firstName": "Terry",
                    "lastName": "Dalton"
                },
                {
                    "firstName": "Elinor",
                    "lastName": "Bartlett"
                },
                {
                    "firstName": "Wynn",
                    "lastName": "Cash"
                },
                {
                    "firstName": "Molina",
                    "lastName": "Hull"
                },
                {
                    "firstName": "Kellie",
                    "lastName": "Diaz"
                },
                {
                    "firstName": "Marla",
                    "lastName": "Sherman"
                },
                {
                    "firstName": "Baldwin",
                    "lastName": "Noble"
                },
                {
                    "firstName": "Isabelle",
                    "lastName": "Moss"
                },
                {
                    "firstName": "Marsh",
                    "lastName": "Carney"
                },
                {
                    "firstName": "Solis",
                    "lastName": "Williams"
                },
                {
                    "firstName": "Jeanine",
                    "lastName": "Hardin"
                },
                {
                    "firstName": "Fanny",
                    "lastName": "Pacheco"
                },
                {
                    "firstName": "Sondra",
                    "lastName": "Gibson"
                },
                {
                    "firstName": "Perez",
                    "lastName": "Simmons"
                }
            ];

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
