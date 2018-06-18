import React from 'react';
import PropTypes from 'prop-types';
import './Chip.scss';

const Chip = ({ name }) => <span className="chip">{name}</span>;

Chip.propTypes = {
  name: PropTypes.string,
};

Chip.defaultProps = {
  name: '',
};

export default Chip;
