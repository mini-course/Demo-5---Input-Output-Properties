import { Project5Page } from './app.po';

describe('project5 App', () => {
  let page: Project5Page;

  beforeEach(() => {
    page = new Project5Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
