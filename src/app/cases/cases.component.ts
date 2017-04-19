import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  alterHeader: string = '';

  constructor() { }

  ngOnInit() {
    //TODO remove this, change to input/event emitter between this and child component instead of timeout
    console.log('before:', this.alterHeader);
      setTimeout(() => {
        this.alterHeader = 'alter-header';
        console.log('after:', this.alterHeader);
      }, 5000);
  }

}
