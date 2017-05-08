import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { fader, slideIn, faderFromLeft, faderDelayFromLeft } from '../utilities/router.animations';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ fader(), slideIn(), faderFromLeft(), faderDelayFromLeft() ]
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public existingForms$: FirebaseListObservable<Object[]>;
  public submitted: boolean = false;
  public showConfirmation: boolean = false;

  constructor(
    public af: AngularFire,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.existingForms$ = this.af.database.list('form_submissions');
    //this.existingForms$.forEach(d => console.log(d));

    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'content': ['', Validators.required],
      'agree': [false]  //named to try to trick spam bots- actually antispam honeypot
    });
  }

  submitForm(data) {
    this.submitted = true;

    if(data.agree) {
        //spambot hit honeypot- don't submit, just clear form (do this on server as well- this won't really block anyone)
        this.clearForm();
        return;
    }

    if(this.contactForm.valid) {
        console.log(data);
        const timestamp = new Date().getTime();
        this.existingForms$.push({
            name: data['name'],
            email: data['email'],
            content: data['content'],
            agree: data['agree'],
            timestamp
        })
        .then(response => {
            this.showConfirmation = true;
        })
        .catch(error => {
            console.log('error submitting form', error);
            //server error- show notice to just send me an email.
        });
    } else {
        console.log('invalid form:', this.contactForm);
    }
}

clearForm() {
    this.submitted = false;
    this.showConfirmation = false;
    this.contactForm.reset({
        agree: false
    });
}

}
