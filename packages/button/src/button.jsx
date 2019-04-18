import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    render() {
        const { handleOnclick } = this.props;

        return (
            <button className="oscar-ui-button" onClick={handleOnclick}>
                A REACT BUTTON
            </button>
        );
    }
}

export default Button;
