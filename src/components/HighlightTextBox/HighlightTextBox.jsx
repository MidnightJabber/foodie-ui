import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HighlightTextBox.scss';

class HighlightTextBox extends Component {
  state = {
    value: '',
  };

  onInputChange = ({ target: { value } }) => {
    const { onValueChange } = this.props;

    onValueChange(value);
    this.setState({ value });
  };

  render = () => {
    const { value } = this.state;
    const { placeholder, inputType } = this.props;

    return (
      <div className="search-box">
        <input
          onChange={this.onInputChange}
          placeholder={placeholder}
          value={value}
          type={inputType}
          spellCheck={false}
        />
        <span className="input-highlight">
          {value.replace(/ /g, '\u00a0')}
        </span>
      </div>
    );
  }
}

HighlightTextBox.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  onValueChange: PropTypes.func,
};

HighlightTextBox.defaultProps = {
  placeholder: '',
  inputType: 'text',
  onValueChange: () => null,
};

export default HighlightTextBox;
