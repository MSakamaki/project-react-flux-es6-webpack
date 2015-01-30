'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var Flux02App, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    Flux02App = require('../../../src/scripts/components/Flux02App.js');
    component = React.createElement(Flux02App);
  });

  it('should create a new instance of Flux02App', function () {
    expect(component).toBeDefined();
  });
});
