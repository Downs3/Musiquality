/**
 * Created by DanTutt on 2/24/16.
 */
var app = angular.module('feedback', []);

app.controller('FeedbackController', FeedbackController);

function FeedbackController($http) {
    // controller data and functions

    var fc = this;

    fc.sendEmail = sendEmail;

function sendEmail($scope) {
    $scope.emails = [
        { from: 'John', subject: 'I love angular', date: 'Jan 1' }
    ];
}}