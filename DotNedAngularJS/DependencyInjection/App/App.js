/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", ["myUtils"]);

    app.controller("diController", ["$scope", "myDialogs",
        function ($scope, myDialogs) {
            $scope.callAlert = function () {
                myDialogs.alert("I have been clicked");
            };
        }
    ]);
}());
