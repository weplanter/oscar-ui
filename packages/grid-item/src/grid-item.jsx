import React, { Component } from 'react';
import './grid-item.css';

class Button extends Component {
    render() {
        return <div className="oscar-ui-grid-item" _id={this.props._id} />;
    }
}

export default Button;
