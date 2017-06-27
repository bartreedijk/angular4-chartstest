import { Angular4ChartstestPage } from './app.po';

describe('angular4-chartstest App', () => {
  let page: Angular4ChartstestPage;

  beforeEach(() => {
    page = new Angular4ChartstestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
