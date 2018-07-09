import React from 'react';
import PropTypes from 'prop-types';

import './RecipeIngredient.scss';

const RecipeIngredient = ({ title, image }) => (
  <li className="recipeingredient">
    <div className="recipeingredient-image-container">
      <img className="recipeingredient-image" alt={title} src={image} />
    </div>
    <div className="recipeingredient-title">{title}</div>
  </li>
);

RecipeIngredient.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

RecipeIngredient.defaultProps = {
  title: '',
  image: '',
};

export default RecipeIngredient;
