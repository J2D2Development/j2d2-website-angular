import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {
  homeMenu: boolean = false;

  constructor() { }

  setMenuStyle(newStyle) {
    this.homeMenu = newStyle;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToPosition(element) {
    //scroll to element
  }

  getCurrentYPosition() {
    //current position on screen
  }

  getElementYPosition(element) {
    //position to scroll to
  }

}
