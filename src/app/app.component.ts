import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

import { GeneralService } from './utilities/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    menuIsOpen: boolean = false;

    constructor(
        public generalService: GeneralService
    ) {

    }

    toggleMenu() {
        this.menuIsOpen = this.menuIsOpen ? false : true;
    }
}
