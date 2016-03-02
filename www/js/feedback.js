/**
 * Created by DanTutt on 2/24/16.
 */
var app = angular.module('feedback', []);

app.controller('FeedbackController', FeedbackController);

function FeedbackController(artistService, userService) {
    // controller data and functions


    var fc = this;
    fc.hideAlert = hideAlert;
    fc.feedback = feedback;
    fc.messages = '';
    fc.name = '';
    fc.username = artistService.login;


    function feedback() {

        var ref = new Firebase("https://musiquality.firebaseio.com/");

        var postsRef = ref.child("feedback");

        var newPostRef = postsRef.push();
        newPostRef.set({
            UserName: userService.user.uid,
            Author: fc.name,
            Feedback: fc.messages


        });
        fc.messageSent = true;
        fc.messages = '';
        fc.name = '';

    }
    function hideAlert(){
        fc.messageSent = false;
    }
}