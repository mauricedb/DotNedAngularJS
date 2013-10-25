/// <reference path="../../../Scripts/jasmine/jasmine.js" />


describe("diController", function () {
    var controller, scope, message;

    beforeEach(function () {
        angular.module('myUtils', []);
        module('myApp');
    });

    var fakeDialog = {
        alert: function (msg) {
            message = msg;
        }
    };

    beforeEach(inject(function ($controller) {
        scope = {};
        controller = $controller('diController', {
            $scope: scope,
            myDialogs: fakeDialog
        });
    }));

    it("should call myDialogs.alert on $scope.callAlert", function () {
        scope.callAlert();

        expect(message).toBe("I have been clicked");
    });
});