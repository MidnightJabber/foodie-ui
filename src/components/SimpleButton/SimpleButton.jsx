import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

class SimpleButton extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    return (
      <a href="https://gph.is/1sD7JH3" className="simplebutton">
        { this.props.title }
      </a>
    );
  }
}

SimpleButton.propTypes = {
  title: PropTypes.string,
};

SimpleButton.defaultProps = {
  title: '',
};

export default SimpleButton;
