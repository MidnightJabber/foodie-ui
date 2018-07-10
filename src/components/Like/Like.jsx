import React, { Component } from 'react';
import $ from 'jquery';
import './Like.scss';

class Like extends Component {
  constructor() {
    super();

    this.state = {
      count: 10,
      showCount: false,
      liked: false,
      currentTarget: null,
    };
  }

  componentDidUpdate = () => {
    const backgroundPosition = this.state.liked ? 'right' : 'left';
    const currentTargetElement = $(this.state.currentTarget);

    if (this.state.currentTarget) {
      currentTargetElement.css('background-position', backgroundPosition);
    }

    currentTargetElement.one('animationend', () => {
      this.setState({ showCount: true });
      currentTargetElement.toggleClass('is_animating');
    });
  }

  onClick = ({ currentTarget }) => {
    const currentLikeCount = this.state.count;
    const heartElement = $(currentTarget).siblings('.like-heart');
    const count = this.state.liked ? currentLikeCount - 1 : currentLikeCount + 1;

    if (!this.state.liked) {
      heartElement.toggleClass('is_animating');
    }

    this.setState({
      showCount: false,
      count,
      liked: !this.state.liked,
      currentTarget: heartElement,
    });
  }

  render = () => (
    <button className="like-container">
      <button className="like-area" onClick={this.onClick} />
      <div className="like-heart" />
      <span className="like-count">
        {this.state.showCount ? this.state.count : ''}
      </span>
    </button>
  );
}

export default Like;
