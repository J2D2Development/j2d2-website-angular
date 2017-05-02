'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendFormViaEmail = functions.database.ref('/form_submissions').onWrite(event => {
    //add log of event here- event.data gets all info in that endpoint- I just want most recent submission
    //if that doesn't work, filter event.data for greatest value of timestamp
    const snapshot = event.data;
    const val = snapshot.val();

    console.log('snapshot:', snapshot);
    console.log('value:', val);
});
