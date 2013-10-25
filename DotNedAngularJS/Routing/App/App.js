/// <reference path="../../Scripts/underscore.js" />
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-route.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

    app.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider.when("/people", {
                templateUrl: "./Templates/PeopleList.html",
                controller: "PeopleListCtrl"
            });
            $routeProvider.when("/person/:id", {
                templateUrl: "./Templates/PersonEditor.html",
                controller: "PersonEditorCtrl"
            });
            $routeProvider.otherwise({
                redirectTo: "/people"
            });
        }
    ]);



    app.controller("PeopleListCtrl", ["$scope", "$location", "peopleSvc",
        function ($scope, $location, peopleSvc) {
            $scope.people = peopleSvc.getAll();

            $scope.select = function (p) {
                $location.path("/person/" + p.id);
            };
        }
    ]);


    app.controller("PersonEditorCtrl", ["$scope", "$location", "$routeParams", "peopleSvc",
        function ($scope, $location, $routeParams, peopleSvc) {

            var person = angular.copy(peopleSvc.getPerson($routeParams.id));
            $scope.currentPerson = person;

            $scope.cancel = function () {
                $location.path("/people");
            };

            $scope.save = function () {
                var originalPerson = peopleSvc.getPerson($routeParams.id);
                angular.copy($scope.currentPerson, originalPerson);
                $location.path("/people");
            };
        }
    ]);


    app.service("peopleSvc", function () {
        var people = [{
            "id": "1",
            "firstName": "Park",
            "lastName": "Cote"
        }, {
            "id": "2",
            "firstName": "Terry",
            "lastName": "Dalton"
        }, {
            "id": "3",
            "firstName": "Elinor",
            "lastName": "Bartlett"
        }, {
            "id": "4",
            "firstName": "Wynn",
            "lastName": "Cash"
        }, {
            "id": "5",
            "firstName": "Molina",
            "lastName": "Hull"
        }, {
            "id": "6",
            "firstName": "Kellie",
            "lastName": "Diaz"
        }, {
            "id": "7",
            "firstName": "Marla",
            "lastName": "Sherman"
        }, {
            "id": "8",
            "firstName": "Baldwin",
            "lastName": "Noble"
        }, {
            "id": "9",
            "firstName": "Isabelle",
            "lastName": "Moss"
        }, {
            "id": "10",
            "firstName": "Marsh",
            "lastName": "Carney"
        }, {
            "id": "11",
            "firstName": "Solis",
            "lastName": "Williams"
        }, {
            "id": "12",
            "firstName": "Jeanine",
            "lastName": "Hardin"
        }, {
            "id": "13",
            "firstName": "Fanny",
            "lastName": "Pacheco"
        }, {
            "id": "14",
            "firstName": "Sondra",
            "lastName": "Gibson"
        }, {
            "id": "15",
            "firstName": "Perez",
            "lastName": "Simmons"
        }];

        return {
            getAll: function () {
                return people;
            },
            getPerson: function (id) {
                return _.find(people, function (p) { return p.id === id; });
            }
        };
    });
}());
