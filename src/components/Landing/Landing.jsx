import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Routes from 'utils/routes';

import SimpleButton from 'components/SimpleButton/SimpleButton';
import HighlightTextBox from 'components/HighlightTextBox/HighlightTextBox';
import currentUserQuery from 'queries/currentUser';
import signupMutation from 'mutations/signup';
import loginMutation from 'mutations/login';
import * as model1 from 'assets/images/landing/models/model1.png';
import * as model2 from 'assets/images/landing/models/model2.png';
import * as model3 from 'assets/images/landing/models/model3.png';
import * as smoke from 'assets/images/landing/AnimatedSmoke.gif';

import Resources from './LandingResources';
import './Landing.scss';

const models = [model1, model2, model3];

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
      showSignupForm: false,
      email: null,
      password: null,
    };

    this.model = models[Math.floor(Math.random() * 3)];
  }

  onSignupBtnClick = () => (
    this.setState({ showLoginForm: false, showSignupForm: true }, this.fadeOutImageContainer)
  );

  onLoginBtnClick = () => (
    this.setState({ showLoginForm: true, showSignupForm: false }, this.fadeOutImageContainer)
  );

  onReadyBtnClick = () => {
    const {
      email,
      password,
      showLoginForm,
      showSignupForm,
    } = this.state;
    const {
      login,
      signup,
    } = this.props;

    if (showLoginForm) {
      login({
        variables: { email, password },
        refetchQueries: [{ query: currentUserQuery }],
      });
    } else if (showSignupForm) {
      signup({
        variables: { email, password },
        refetchQueries: [{ query: currentUserQuery }],
      });
    }
  }

  getLoginForm = () => {
    const { showLoginForm } = this.state;

    if (showLoginForm) {
      return (
        <div className="landing-form-container">
          <div className="form">
            <HighlightTextBox placeholder="Email" onValueChange={email => this.setState({ email })} />
            <HighlightTextBox placeholder="Password" inputType="password" onValueChange={password => this.setState({ password })} />
            <SimpleButton title={Resources.Button.ready} onBtnClick={this.onReadyBtnClick} />
          </div>
        </div>
      );
    }

    return null;
  }

  getSignupForm = () => {
    const { showSignupForm } = this.state;

    if (showSignupForm) {
      return (
        <div className="landing-form-container">
          <div className="form">
            <HighlightTextBox placeholder="Email" onValueChange={email => this.setState({ email })} />
            <HighlightTextBox placeholder="Password" inputType="password" onValueChange={password => this.setState({ password })} />
            <HighlightTextBox placeholder="Confirm password" inputType="password" />
            <SimpleButton title={Resources.Button.ready} onBtnClick={this.onReadyBtnClick} />
          </div>
        </div>
      );
    }

    return null;
  }

  getLandingRoute = () => (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-logo">FitMi</div>
        <div className="landing-header-auth-container">
          <SimpleButton title={Resources.Button.signup} onBtnClick={this.onSignupBtnClick} />
          <SimpleButton title={Resources.Button.login} onBtnClick={this.onLoginBtnClick} />
        </div>
      </div>
      <div className="landing-content">
        <div className="landing-content-text-container">
          <div className="title">Fitness starts with what you eat.</div>
          <div className="description">Take control of your goals. Track calories, breakdown ingredients, and log activities with MyFitnessPal.</div>
        </div>
        <div className="landing-content-image-container">
          <img className="landing-content-image" alt="" src={smoke} />
          <img className="landing-content-image" alt="" src={this.model} />
        </div>
        { this.getLoginForm() }
        { this.getSignupForm() }
      </div>
    </div>
  )

  fadeOutImageContainer = () => {
    const imageContainerElement = document.getElementsByClassName('landing-content-image-container')[0];
    imageContainerElement.style.opacity = '0';
  }

  /**
   * Based on if an active cookie for a logged in user exists, we direct to then
   * dashboard or show the signup box
   * @return {React.Component | Route} Component or Route(component) to render
   */
  render = () => {
    const { loading, user } = this.props.data;

    if (loading) {
      return (<div>Loading...</div>);
    } else if (!loading && !user) {
      return this.getLandingRoute();
    }

    return (<Redirect to={Routes.Dashboard} />);
  }
}

Landing.propTypes = {
  login: PropTypes.func,
  signup: PropTypes.func,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};


Landing.defaultProps = {
  login: () => null,
  signup: () => null,
  data: {},
};

export default graphql(currentUserQuery)(graphql(loginMutation, { name: 'login' })(graphql(signupMutation, { name: 'signup' })(Landing)));
