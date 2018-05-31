import React from 'react';

import SimpleButton from 'components/SimpleButton/SimpleButton';

import Resources from './LandingResources';
import './Landing.scss';

const Landing = () => (
  <div className="landing">
    <div className="landing-content">
      <div className="landing-heading">
        { Resources.Content.header }
      </div>
      <div className="landing-body">
        { Resources.Content.body }
      </div>
      <div className="landing-button-container">
        <SimpleButton title={Resources.Button.learnMore} />
        <SimpleButton title={Resources.Button.signup} />
      </div>
    </div>
  </div>
);

export default Landing;
