import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import SimpleButton from 'components/SimpleButton/SimpleButton';
import HighlightTextBox from 'components/HighlightTextBox/HighlightTextBox';
import currentUserQuery from 'queries/currentUser';
import signupMutation from 'mutations/signup';
import loginMutation from 'mutations/login';
import * as foodTray1 from 'assets/images/FoodTray1.svg';
import * as foodTray2 from 'assets/images/FoodTray2.svg';

import Resources from './LandingResources';
import './Landing.scss';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: false,
      showSignupForm: false,
      email: null,
      password: null,
    };
  }

  onSignupBtnClick = () => this.setState({ showLoginForm: false, showSignupForm: true })

  onLoginBtnClick = () => this.setState({ showLoginForm: true, showSignupForm: false })

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
        <div className="landing-form-container-login">
          <div className="form">
            <HighlightTextBox placeholder="Email" onValueChange={email => this.setState({ email })} />
            <HighlightTextBox placeholder="Password" inputType="password" onValueChange={password => this.setState({ password })} />
            <SimpleButton title={Resources.Button.ready} onBtnClick={this.onReadyBtnClick} />
          </div>
          <img className="image" alt="" src={foodTray2} />
        </div>
      );
    }

    return null;
  }

  getSignupForm = () => {
    const { showSignupForm } = this.state;

    if (showSignupForm) {
      return (
        <div className="landing-form-container-signup">
          <div className="form">
            <HighlightTextBox placeholder="Email" onValueChange={email => this.setState({ email })} />
            <HighlightTextBox placeholder="Password" inputType="password" onValueChange={password => this.setState({ password })} />
            <HighlightTextBox placeholder="Confirm password" inputType="password" />
            <SimpleButton title={Resources.Button.ready} onBtnClick={this.onReadyBtnClick} />
          </div>
          <img className="image" alt="" src={foodTray1} />
        </div>
      );
    }

    return null;
  }

  render = () => (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-logo">FitMi</div>
        <div className="landing-header-auth-container">
          <SimpleButton title={Resources.Button.signup} onBtnClick={this.onSignupBtnClick} />
          <SimpleButton title={Resources.Button.login} onBtnClick={this.onLoginBtnClick} />
        </div>
      </div>
      <div className="landing-content">
        { this.getLoginForm() }
        { this.getSignupForm() }
      </div>
    </div>
  )
}

Landing.propTypes = {
  login: PropTypes.func,
  signup: PropTypes.func,
};


Landing.defaultProps = {
  login: () => null,
  signup: () => null,
};

export default graphql(currentUserQuery)(graphql(loginMutation, { name: 'login' })(graphql(signupMutation, { name: 'signup' })(Landing)));
