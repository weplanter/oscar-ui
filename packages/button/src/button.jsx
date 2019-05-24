import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        return (
            <button className="oscar-ui-button" {...this.props}>
                A REACT BUTTON
            </button>
        );
    }
}

export default Button;
