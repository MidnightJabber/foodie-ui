import React from 'react';
import PropTypes from 'prop-types';

import './RecipeHeader.scss';

const RecipeHeader = ({ image }) => (
  <div
    className="recipe-header"
    style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(245, 242, 242, 1)), url(${image})` }}
  />
);

RecipeHeader.propTypes = {
  image: PropTypes.string,
};

RecipeHeader.defaultProps = {
  image: '', // TODO: Add default image or call for random default image
};

export default RecipeHeader;
