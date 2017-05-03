'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendFormViaEmail = functions.database.ref('/form_submissions').onWrite(event => {
    const snapshot = event.data;
    const newSubmission = snapshot._delta;
    /*
        ok- newSubmission should now have only the new entry. now...
        1) import nodemailer- set to use my gmail
        2) create template?  possible with nodemailer?
        3) on submit, send email!
    */ 
});
