var assert = require('assert');

describe('Page', function () {
  before(function (done) {
    browser.url('http://localhost:3000', done);
  });

  it('should have the right title', function () {
    browser.url('http://localhost:3000');
    var title = browser.getTitle();
    assert.equal(title, 'Circle');
  });

  it('On desktop menu should be visible', function () {
    browser.url('http://localhost:3000');
    browser.setViewportSize({
      width: 1600,
      height: 1200
    });

    var transitionTiming = browser.getCssProperty('.menu-slide', 'transition').parsed[2].string;
    assert.equal(transitionTiming, 'ease');
  });

  it('On mobile menu should not be visible', function () {
    browser.url('http://localhost:3000');
    browser.setViewportSize({
      width: 480,
      height: 600
    });

    var transitionTiming = browser.getCssProperty('.menu-slide', 'transition').parsed[2].string;
    assert.equal(transitionTiming, 'ease-out');
  });

  it('Tapping the menu button will show the menu', function () {
    browser.url('http://localhost:3000');
    browser.setViewportSize({
      width: 480,
      height: 600
    });
    // When our Browsersync message is displayed, we can't click the menu button
    browser.waitUntil(function () {
      return (!browser.isVisible('#__bs_notify__'));
    }, 5000);
    browser.click('.glyphicon-header');

    var menu = browser.element('.menu-slide-open');
    var menuClasses = browser.getAttribute('.menu-slide-open', 'class').split(' ');

    assert.ok(menuClasses.indexOf('menu-slide-open') !== -1);
  });

  it('Louis Andriessen is displayed', function(){
    browser.url('http://localhost:3000');
    browser.waitForExist('.list-group-item p');
    var elems = browser.getText('.list-group-item p');
    var text = 'Louis Andriessen is a Dutch composer and pianist based in Amsterdam. He is a lecturer at the Royal ' +
      'Conservatory of The Hague. He was recipient of the Gaudeamus International Composers Award in 1959.';
    assert.equal(elems[0], text);
  });

  it('We can go to a detail page', function(){
    browser.url('http://localhost:3000');
    browser.waitForExist('.list-group-item a');
    browser.click('.list-group-item a');
    assert.equal(browser.getText('.container h2'), 'Louis Andriessen');
  });

  it('We can go to a detail page and back again', function(){
    browser.url('http://localhost:3000');
    browser.waitForExist('.list-group-item a');
    browser.click('.list-group-item a');
    browser.waitForExist('.container a .glyphicon-menu-left');
    browser.click('.container a .glyphicon-menu-left');
    assert(browser.isExisting('.mainPanel'));
  });

});


//@TODO update readme file