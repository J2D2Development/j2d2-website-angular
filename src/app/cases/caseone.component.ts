import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';

import { faderToggle } from '../utilities/router.animations';
import { GeneralService } from '../utilities/general.service';

@Component({
  templateUrl: './sub-component-templates/caseone.html',
  animations: [ faderToggle() ] 
})
export class CaseOneComponent implements OnInit {
  expressBaseRoute: string = `app.all('*', function(req, res) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;res.sendFile('index.html', {root: __dirname});<br />
  });`;
  
  mongoSchema: string = `var mongoose = require('mongoose');<br />
    var Schema = mongoose.Schema;<br />
    var bcrypt = require('bcrypt');<br />
    var saltRounds = 10;<br />
    <br />
    var UserSchema = new Schema({<br />
    &nbsp;&nbsp;&nbsp;&nbsp;username: {type: String, required: true, index: {unique: true}},<br />
    &nbsp;&nbsp;&nbsp;&nbsp;password: {type: String, required: true},<br />
    &nbsp;&nbsp;&nbsp;&nbsp;firstname: {type: String, required: false},<br />
    &nbsp;&nbsp;&nbsp;&nbsp;lastname: {type: String, required: false}<br />
    });<br />
    <br />
    UserSchema.pre('save', function(next) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;var user = this;<br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;if(!user.isModified('password')) return next();<br />
    &nbsp;&nbsp;&nbsp;&nbsp;bcrypt.hash(user.password, saltRounds, function(err, hash) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(err) return next(err);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user.password = hash;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next();<br />
    &nbsp;&nbsp;&nbsp;&nbsp;});<br />
  });<br />`;
  
  htmlEntitiesCheck: string = `function htmlEntities(str) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');<br />
  }`;
  
  checkPriorLogin: string = `ngOnInit() {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;if(sessionStorage.getItem('loggedIn')) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let token = sessionStorage.getItem('token');<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.loginService.checkPriorLogin(token)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.subscribe(response => {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var parsedResponse = JSON.parse(response._body);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(parsedResponse.priorLogin) {<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.loginService.isLoggedIn = true;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.router.navigate(['/']);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
    }`;

  constructor(
    public casesService: CasesService,
    public generalService: GeneralService
  ) { }

  ngOnInit() {
    this.casesService.updatePreviewBarState('shrunk');
  }

  updatePreviewBarState(state): void {
    this.casesService.updatePreviewBarState(state);
  }

}
