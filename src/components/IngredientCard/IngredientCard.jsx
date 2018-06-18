import React from 'react';
import PropTypes from 'prop-types';
import Themes from 'assets/json/themes.json';

import './IngredientCard.scss';

const IngredientCard = ({
  name,
  image,
  theme,
  children,
}) => (
  <div className={`ingredient-card ${Themes[theme] || Themes.default}`}>
    <div className="ingredient-header">
      <img
        className="ingredient-image"
        alt={name}
        src={image}
      />
      <span className="ingredient-name">
        {name}
      </span>
    </div>
    <div className="ingredient-body">
      <div className="ingredient-tags">
        {children}
      </div>
    </div>
  </div>
);

IngredientCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

IngredientCard.defaultProps = {
  name: '',
  image: '',
  theme: '',
  children: null,
};

export default IngredientCard;
