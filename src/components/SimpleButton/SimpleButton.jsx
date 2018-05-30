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
      <div className="simplebutton">
        <div className="simplebutton-title">
          { this.props.title }
        </div>
      </div>
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
