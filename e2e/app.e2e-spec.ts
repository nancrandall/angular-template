import { AppPage } from './app.po';

describe('angular-starter-pattern App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pattern Angular Templater');
  });
});
