import React, { Component } from 'react';
import './grid.css';

class Button extends Component {
    render() {
        const nextProps = {
            ...this.props,
            ...{
                className: 'oscar-ui-grid'
            }
        };
        return <div {...nextProps} />;
    }
}

export default Button;
