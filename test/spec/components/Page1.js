'use strict';

describe('Page1', function () {
  var React = require('react/addons');
  var Page1, component;

  beforeEach(function () {
    Page1 = require('../../../src/scripts/components/Page1.js');
    component = React.createElement(Page1);
  });

  it('should create a new instance of Page1', function () {
    expect(component).toBeDefined();
  });
});
