'use strict';

describe('Page2', function () {
  var React = require('react/addons');
  var Page2, component;

  beforeEach(function () {
    Page2 = require('../../../src/scripts/components/Page2.js');
    component = React.createElement(Page2);
  });

  it('should create a new instance of Page2', function () {
    expect(component).toBeDefined();
  });
});
