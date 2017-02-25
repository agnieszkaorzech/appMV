/**
 * Created by Agnieszka on 23.02.2017.
 */
var app = angular.module('app');
module.exports = function (app) {
    app.directive('bandInfo', function (bandList) {
        return {
            template: '<h1 ng-repeat="band in bands">{{band.name}}-{{band.formed}}</h1>',
            restrice: 'E',
            controller: function ($scope) {
                $scope.bands = bandList;
            }
        }
    })
};