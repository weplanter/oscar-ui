import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        return (
            <button className="oscar-ui-button" data-id={this.props['data-id']}>
                A REACT BUTTON
            </button>
        );
    }
}

export default Button;
