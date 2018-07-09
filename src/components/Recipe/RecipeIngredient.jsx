import React from 'react';
import PropTypes from 'prop-types';

import './RecipeIngredient.scss';

const RecipeIngredient = ({
  title,
  image,
  quantity,
  unit,
}) => (
  <li className="recipeingredient">
    <div className="recipeingredient-image-container">
      <img className="recipeingredient-image" alt={title} src={image} />
    </div>
    <div className="recipeingredient-title">
      {title}
    </div>
    <div className="recipeingedient-measurement">
      {`${quantity} `}
      <span>{unit}</span>
    </div>
  </li>
);

RecipeIngredient.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  quantity: PropTypes.string,
  unit: PropTypes.string,
};

RecipeIngredient.defaultProps = {
  title: '',
  image: '',
  quantity: '',
  unit: '',
};

export default RecipeIngredient;
