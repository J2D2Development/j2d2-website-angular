import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    menuIsOpen: boolean = false;

    toggleMenu() {
        this.menuIsOpen = this.menuIsOpen ? false : true;
    }
}
