import React from 'react';
import PropTypes from 'prop-types';

import UserChip from 'components/UserChip/UserChip';

import './RecipeHeader.scss';

const RecipeHeader = ({ image, authorImage, authorName }) => (
  <div
    className="recipeheader"
    style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(245, 242, 242, 1)), url(${image})` }}
  >
    <div className="recipeheader-userchip-container">
      <UserChip
        image={authorImage}
        name={authorName}
      />
    </div>
  </div>
);

RecipeHeader.propTypes = {
  image: PropTypes.string,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
};

RecipeHeader.defaultProps = {
  image: '', // TODO: Add default image or call for random default image
  authorImage: '', // TODO: Add default image or call for random image
  authorName: '',
};

export default RecipeHeader;
