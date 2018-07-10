import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.scss';

const CardContainer = ({ children }) => (
  <div className="card-container">
    {children}
  </div>
);

CardContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

CardContainer.defaultProps = {
  children: [],
};

export default CardContainer;
