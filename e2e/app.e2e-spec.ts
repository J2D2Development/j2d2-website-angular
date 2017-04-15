import { J2d2developmentAngularPage } from './app.po';

describe('j2d2development-angular App', function() {
  let page: J2d2developmentAngularPage;

  beforeEach(() => {
    page = new J2d2developmentAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
