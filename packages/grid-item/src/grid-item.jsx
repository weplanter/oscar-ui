import React, { Component } from 'react';
import './grid-item.css';

class Button extends Component {
    render() {
        return (
            <div className="oscar-ui-grid-item" data-id={this.props['data-id']}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
