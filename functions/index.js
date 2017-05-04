'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);

//https://firebase.google.com/docs/functions/config-env
const gmailEmailRaw = functions.config().gmail.email;
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);

const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendFormViaEmail = functions.database.ref('/form_submissions/{pushId}').onWrite(event => {
    const newSubmission = event.data.val();
    
    return sendFormHandler(newSubmission.name, newSubmission.email, newSubmission.content);
});

function sendFormHandler(name, email, content) {
    let mailOptions = {
        from: `Joe Driscoll <joedriscoll79@gmail.com>`,
        to: gmailEmailRaw,
        subject: 'Form submitted via j2d2development.com'
    };

    mailOptions.text = `A new message has been submitted via j2d2development.com.  It's from ${name} at ${email}.  The message is: ${content}.`;
    mailOptions.html = `
        <div style="margin: 0px auto;width: 100%;max-width: 400px;">
        <h3 style="font-weight:normal;background-color:#333;color:#f5f5f5;margin:0 0 0.5em 0;padding:0.5em;">New Message from j2d2</h3>
        <table style="font-size: 1.25em;">
        <tbody>
            <tr>
            <td style="padding:6px;">From:</td>
            <td style="padding:6px;">${name}</td>
            </tr>
            <tr>
            <td style="padding:6px;">Email:</td>
            <td style="padding:6px;">${email}</td>
            </tr>
        </tbody>
        </table>
        <div style="margin:1em;">
            ${content}
        <div style="margin-top: 1em;text-align:right;">
            <a href="#">Manage submissions (coming soon!)</a>
        </div>
        </div>
        </div>
    `;

    return mailTransport.sendMail(mailOptions)
        .then(() => {
            console.log('email sent to ', gmailEmailRaw, ' from', name, email);
        }, error => {
            console.log('error in sending:', error);
        });
}
