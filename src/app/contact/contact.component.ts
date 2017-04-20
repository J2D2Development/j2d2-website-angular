import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public existingForms$: FirebaseListObservable<Object[]>;

  constructor(
    public af: AngularFire,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.existingForms$ = this.af.database.list('form_submissions');
    this.existingForms$.forEach(d => console.log(d));

    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'content': ['', Validators.required]
    });
  }

  submitForm(data) {
    if(this.contactForm.valid) {
      const timestamp = new Date().getTime();
      this.existingForms$.push({
        name: data['name'],
        email: data['email'],
        content: data['content'],
        timestamp
      });
    } else {
      console.log('invalid form:', this.contactForm);
    }
  }

  clearForm() {
    this.contactForm.reset();
  }

}
