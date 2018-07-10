import React from 'react';
import PropTypes from 'prop-types';
import './UserChip.scss';

const UserChip = ({
  name,
  image,
}) => (
  <div className="user-chip">
    <img
      src={image}
      alt={name}
    />
    {name}
  </div>
);

UserChip.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

UserChip.defaultProps = {
  name: '',
  image: '',
};

export default UserChip;
