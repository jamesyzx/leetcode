import { NgClient1Page } from './app.po';

describe('ng-client1 App', function() {
  let page: NgClient1Page;

  beforeEach(() => {
    page = new NgClient1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
