/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var module = angular.module("myUtils", []);

    module.service("myDialogs", function () {
        return {
            alert: function (msg) {
                alert(msg);
            }
        };
    });
}());
