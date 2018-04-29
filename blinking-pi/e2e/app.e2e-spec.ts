import { BlinkingPiPage } from './app.po';

describe('blinking-pi App', () => {
  let page: BlinkingPiPage;

  beforeEach(() => {
    page = new BlinkingPiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pi!!');
  });
});
