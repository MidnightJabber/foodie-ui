import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = ({
  title,
  type,
  onBtnClick,
  btnDisabled,
}) => (
  <button
    type={type}
    className="simplebutton"
    disabled={btnDisabled}
    onClick={onBtnClick}
  >
    {title}
  </button>
);

SimpleButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  btnDisabled: PropTypes.bool,
  onBtnClick: PropTypes.func,
};

SimpleButton.defaultProps = {
  title: '',
  type: 'button',
  btnDisabled: false,
  onBtnClick: () => null,
};

export default SimpleButton;
