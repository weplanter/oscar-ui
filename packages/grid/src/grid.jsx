import React, { Component } from 'react';
import './grid.css';

class Button extends Component {
    render() {
        return (
            <div className="oscar-ui-grid" data-id={this.props['data-id']}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
