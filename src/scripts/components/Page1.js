'use strict';

var React = require('react/addons');
require('../../styles/Page1.css');

var imageURL = require('../../images/yeoman.png');



var Page1 = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Page1</p>
          <ReactTransitionGroup transitionName="fade">
            <img src={imageURL} />
          </ReactTransitionGroup>
        </div>
      );
  }
});

module.exports = Page1;


