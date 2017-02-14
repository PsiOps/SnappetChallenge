import { Ng2TreeReportPage } from './app.po';

describe('ng2-tree-report App', function() {
  let page: Ng2TreeReportPage;

  beforeEach(() => {
    page = new Ng2TreeReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
