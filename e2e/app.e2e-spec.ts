import { AppPage } from './app.po';

describe('wedding-inv-mansa App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to heller!');
  });
});
