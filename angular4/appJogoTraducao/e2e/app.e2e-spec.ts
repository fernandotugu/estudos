import { AppJogoTraducaoPage } from './app.po';

describe('app-jogo-traducao App', () => {
  let page: AppJogoTraducaoPage;

  beforeEach(() => {
    page = new AppJogoTraducaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
