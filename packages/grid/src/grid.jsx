import React, { Component } from 'react';
import './grid.css';

class Button extends Component {
    render() {
        return <div className="oscar-ui-grid" data-id={this.props._id} />;
    }
}

export default Button;
