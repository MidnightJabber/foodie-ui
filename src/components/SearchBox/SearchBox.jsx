import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

class SearchBox extends Component {
  state = {
    value: '',
  };

  onInputChange = ({ target: { value } }) => this.setState({ value });

  render = () => {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="search-box">
        <input
          onChange={this.onInputChange}
          placeholder={placeholder}
          value={value}
          spellCheck={false}
        />
        <span className="input-highlight">
          {value.replace(/ /g, '\u00a0')}
        </span>
      </div>
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
};

SearchBox.defaultProps = {
  placeholder: '',
};

export default SearchBox;
