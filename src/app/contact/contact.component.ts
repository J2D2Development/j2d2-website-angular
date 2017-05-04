import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { fader } from '../utilities/router.animations';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ fader() ],
  host: {
    '[@fader]': 'state'
  }
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public existingForms$: FirebaseListObservable<Object[]>;
  public submitted: boolean = false;

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
      'content': ['', Validators.required]
    });
  }

  submitForm(data) {
    this.submitted = true;

    if(this.contactForm.valid) {
      const timestamp = new Date().getTime();
      this.existingForms$.push({
        name: data['name'],
        email: data['email'],
        content: data['content'],
        timestamp
      })
      .then(response => {
        console.log('submission success: show notice at this point with reset button');
        this.clearForm();
      })
      .catch(error => console.log('error submitting form'));
    } else {
      console.log('invalid form:', this.contactForm);
    }
  }

  clearForm() {
    this.submitted = false;
    this.contactForm.reset();
  }

}
