import React from 'react';
import PropTypes from 'prop-types';

import './RecipeIngredients.scss';

const RecipeIngredients = ({ children }) => (
  <ul className="recipeingredients">
    {children}
  </ul>
);

RecipeIngredients.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

RecipeIngredients.defaultProps = {
  children: null,
};

export default RecipeIngredients;
