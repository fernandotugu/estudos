import { AppPassaroUrbanoPage } from './app.po';

describe('app-passaro-urbano App', () => {
  let page: AppPassaroUrbanoPage;

  beforeEach(() => {
    page = new AppPassaroUrbanoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to xyz!');
  });
});
