import React from 'react';
import PropTypes from 'prop-types';

import './RecipeStep.scss';

const positionStyleMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const RecipeStep = ({ number, description, position }) => (
  <div className="recipe-step" style={{ justifyContent: positionStyleMap[position] }}>
    <div className="recipe-step-continer">
      <div className="recipe-step-title">Step {number}</div>
      <div className="recipe-step-description">{description}</div>
    </div>
  </div>
);

RecipeStep.propTypes = {
  number: PropTypes.number,
  description: PropTypes.string,
  position: PropTypes.string,
};

RecipeStep.defaultProps = {
  number: null,
  description: '',
  position: '',
};

export default RecipeStep;
