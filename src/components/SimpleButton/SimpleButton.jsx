import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

class SimpleButton extends Component {

    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        return (
            <a href="#" className="simplebutton">
                <div className="simplebutton-title">
                    { this.props.title }
                </div>
            </a>
        );
    }
}

SimpleButton.propTypes = {
    title: PropTypes.string
}

export default SimpleButton;
