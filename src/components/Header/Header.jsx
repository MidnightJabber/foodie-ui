import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { graphql } from 'react-apollo';
import { faCogs } from '@fortawesome/fontawesome-free-solid';
import SimpleButton from 'components/SimpleButton/SimpleButton';
import { Redirect } from 'react-router-dom';
import Routes from 'utils/routes';
import currentUserQuery from 'queries/currentUser';
import PropTypes from 'prop-types';
import logoutMutation from 'mutations/logout';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userCircleOptionsShown: false,
    };
  }

  onLogoutClick = () => {
    const { logout } = this.props;
    logout({
      refetchQueries: [{ query: currentUserQuery }],
    });
  }

  getDashboardRoute = () => (
    <div className="header">
      <div className="header-logo">FitMi</div>
      <div
        role="button"
        tabIndex={0}
        className="header-user-circle"
        onKeyDown={this.userClircleOnClick}
        onClick={this.userClircleOnClick}
      />
      { this.showUserCircleOptions() }
    </div>
  );

  userClircleOnClick = () => {
    this.setState({ userCircleOptionsShown: !this.state.userCircleOptionsShown });
  }

  showUserCircleOptions = () => {
    if (this.state.userCircleOptionsShown) {
      return (
        <div className="user-circle-options-container">
          <div className="options-header-container">
            <div className="profile-image" />
            <div className="options-header">
              <div className="name">Vishrut Reddi</div>
              <div className="email">vishrutreddi@gmail.com</div>
            </div>
          </div>
          <ul className="options">
            <li>
              <FontAwesomeIcon className="icon" icon={faCogs} />
              <div className="text">Settings</div>
            </li>
          </ul>
          <div className="options-footer-container">
            <SimpleButton title="Logout" onBtnClick={this.onLogoutClick} />
          </div>
        </div>
      );
    }

    return null;
  }

  /**
   * Based on if an active cookie for a logged in user exists, we direct to the
   * dashboard or to the landing page
   * @return {React.Component | Route} Component or Route(component) to render
   */
  render = () => {
    const { loading, user } = this.props.data;

    if (loading) {
      return (<div>Loading...</div>);
    } else if (!loading && user) {
      return this.getDashboardRoute();
    }

    return (<Redirect to={Routes.Root} />);
  }
}

Header.propTypes = {
  logout: PropTypes.func,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};


Header.defaultProps = {
  logout: () => null,
  data: {},
};

export default graphql(currentUserQuery)(graphql(logoutMutation, { name: 'logout' })(Header));
