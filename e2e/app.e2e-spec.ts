import { SmartBillingPage } from './app.po';

describe('smart-billing App', () => {
  let page: SmartBillingPage;

  beforeEach(() => {
    page = new SmartBillingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
