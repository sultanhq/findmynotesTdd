const expect = require('chai').expect;

describe('Notes App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Find My Notes');
  });

  it('Should allow me to create a note', () => {
    const noteTitle = "Shopping List";
    browser.url('http://localhost:3000/');
    browser.element('.note-input').setValue(noteTitle);
    browser.click('.note-submit');
    const actual = browser.element('.note-text').getText();

    expect(actual).to.equal(noteTitle)
  });
});