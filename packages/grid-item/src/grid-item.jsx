import React, { Component } from 'react';
import './grid-item.css';

class Button extends Component {
    render() {
        const nextProps = {
            ...this.props,
            ...{
                className: 'oscar-ui-grid-item'
            }
        };
        return <div {...nextProps} />;
    }
}

export default Button;
