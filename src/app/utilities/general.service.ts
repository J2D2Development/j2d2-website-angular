import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  constructor() { }

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
