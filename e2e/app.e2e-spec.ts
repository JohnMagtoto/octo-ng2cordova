import { Ng2cordovaPage } from './app.po';

describe('ng2cordova App', () => {
  let page: Ng2cordovaPage;

  beforeEach(() => {
    page = new Ng2cordovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
