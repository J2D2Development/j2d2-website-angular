import { Component, OnInit } from '@angular/core';
import { fader } from '../utilities/router.animations';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  animations: [ fader() ],
  host: {
    '[@fader]': 'state'
  }
})
export class CasesComponent implements OnInit {
  alterHeader: string = '';
  alterSidebar: string = '';
  hideDetails: string = '';

  constructor() { }

  ngOnInit() {
    //this.updateUI(true);
  }

  updateUI(revert?: boolean) {
    // if(revert) {
    //   this.alterHeader = '';
    //   this.alterSidebar = '';
    //   this.hideDetails = '';
    // } else {
    //   this.alterHeader = 'alter-header';
    //   this.alterSidebar = 'alter-sidebar';
    //   this.hideDetails = 'hide-details';
    // }
  }
}
