import { browser, element, by } from 'protractor';

export class J2d2developmentAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
