import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sub-component-templates/caseone.html'
})
export class CaseOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('pass');
  }

}
