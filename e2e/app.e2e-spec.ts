import { AngularRouterTestPage } from './app.po';

describe('angular-router-test App', function() {
  let page: AngularRouterTestPage;

  beforeEach(() => {
    page = new AngularRouterTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
