import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Like from 'components/Like/Like';
import PropTypes from 'prop-types';
import React from 'react';
import UserChip from 'components/UserChip/UserChip';
import { faClock } from '@fortawesome/fontawesome-free-regular';

import './RecipeCard.scss';

const RecipeCard = ({
  title,
  image,
  cooktime,
  description,
  authorName,
  authorImage,
}) => (
  <div className="recipe-card">
    <div
      className="recipe-card-image"
      alt={title}
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(245, 242, 242, 1)), url(${image})` }}
    >
      <UserChip
        image={authorImage}
        name={authorName}
      />
    </div>
    <div className="recipe-card-title">
      {title}
    </div>
    <div className="recipe-card-body">
      {description}
    </div>
    <div className="recipe-card-footer">
      <div className="recipe-card-cooktime">
        <FontAwesomeIcon icon={faClock} />
        <span>{cooktime} minutes</span>
      </div>
      <Like />
    </div>
  </div>
);

RecipeCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  cooktime: PropTypes.number,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
};

RecipeCard.defaultProps = {
  title: '',
  image: '',
  description: '',
  cooktime: 0,
  authorName: '',
  authorImage: '',
};

export default RecipeCard;
